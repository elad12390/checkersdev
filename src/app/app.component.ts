import {Component, OnInit} from '@angular/core';
import {CheckersService, IState} from './services/checkers.service';
import {FormControl} from '@angular/forms';
import {switchMap, tap} from 'rxjs/operators';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  private checked: boolean = true;
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
    this.server.connectToGame(this.gameFormControl.value, 'Player_Demo_' + this.playeridx).subscribe((res) => console.log(res));
  }

  public refreshView(): void {
    this.server.connectToGame(this.gameFormControl.value, 'Player_Demo_' + this.playeridx).pipe(
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
    ).subscribe();
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
