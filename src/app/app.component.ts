import {Component, OnInit} from '@angular/core';
import {CheckersService, IState, IVersion} from './services/checkers.service';
import {FormControl} from '@angular/forms';
import {map, switchMap, tap, timeInterval} from 'rxjs/operators';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {environment} from '../environments/environment';
import {EMPTY, interval, Observable, of} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  private checked = true;
  public version: IVersion;
  constructor(public server: CheckersService) {
  }
  title = 'checkers-client';
  gameFormControl: FormControl = new FormControl('Game_Demo_1');
  serverUrl: FormControl = new FormControl();
  state: IState;
  playeridx = 1;
  localServerFormControl: FormControl = new FormControl(true);

  ngOnInit(): void {
    this.refreshView();
    this.localServerFormControl.valueChanges.pipe(
      tap((val) => this.localServer(val))
    ).subscribe();

    this.serverUrl.valueChanges.pipe(
      tap(() => this.localServer(this.checked))
    ).subscribe();
  }

  public connectToGame(): void {
    this.server.connectToGame(this.gameFormControl.value, 'Player_Demo_' + this.playeridx)
      .pipe(
        switchMap(() => interval(1000).pipe(
          switchMap(() => this.server.version()),
          map((obj) => obj),
          switchMap((versionObj: IVersion) => {
            this.version = versionObj;
            const version = versionObj.version;
            if (CheckersService.currentVersion !== version ) {
              CheckersService.currentVersion = version;
              return this.refreshViewObservable();
            } else {
              return EMPTY;
            }
          })
        ))
      )
      .subscribe((res) => console.log(res));
  }

  public refreshViewObservable(): Observable<any> {
    return this.server.connectToGame(this.gameFormControl.value, 'Player_Demo_' + this.playeridx).pipe(
      switchMap(() => this.server.state().pipe(
        tap((res) => {
          this.state = res;
          const arr = [...new Array(14)].map(() => [...new Array(14)]);
          this.state.board.squares.map((item) => {
            if (item.chip) {
              const player = this.state.players.find(pl => !!(Object.values(pl.chips).find((chip) => chip.id === item.chip.id)));
              arr[14 - item.position.y][item.position.x - 1] = {
                ...item,
                playerId: player.index
              };
            } else {
              arr[14 - item.position.y][item.position.x - 1] = item;
            }
          });
          this.state.board.squares = arr as [];
        })
      ))
    );
  }
  public refreshView(): void {
    this.refreshViewObservable().subscribe();
  }

  public nextPlayer(): void {
    if (this.playeridx + 1 > 4) {
      this.playeridx = 1;
    } else {
      this.playeridx++;
    }

    this.refreshView();
  }

  public playedMove(): void {
    this.nextPlayer();
  }

  public localServer(val: boolean): void {
    this.checked = val;
    this.server.serverUrl = this.checked ? environment.serverUrl : this.serverUrl.value;
  }
}
