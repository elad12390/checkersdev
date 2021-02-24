import {Component, OnInit} from '@angular/core';
import {CheckersService, IState, IVersion} from './services/checkers.service';
import {FormControl} from '@angular/forms';
import {filter, map, switchMap, tap, timeInterval} from 'rxjs/operators';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {environment} from '../environments/environment';
import {EMPTY, interval, Observable, of} from 'rxjs';
import {groupBy, keysToLowerCase} from '../assets/states';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  private checked = true;
  public version: IVersion;
  statesByGroup: any;
  public selectableGames: string[];
  public selectedGame: any;
  constructor(public server: CheckersService, private snackBar: MatSnackBar) {
  }
  title = 'checkers-client';
  gameFormControl: FormControl = new FormControl('Game_Demo_1');
  serverUrl: FormControl = new FormControl();
  state: any;
  playeridx = 1;

  localServerFormControl: FormControl = new FormControl(true);
  selectGame: FormControl = new FormControl(null);
  logFile: FormControl = new FormControl('');
  public stepNum = 0;

  ngOnInit(): void {
    this.refreshView();
    this.localServerFormControl.valueChanges.pipe(
      tap((val) => this.localServer(val))
    ).subscribe();

    this.serverUrl.valueChanges.pipe(
      tap(() => this.localServer(this.checked))
    ).subscribe();

    this.selectGame.valueChanges.pipe(
      tap((a) => this.selectedGame = a),
      tap(a => this.refreshView())
    ).subscribe();

    this.logFile.valueChanges.pipe(
      map(a => a.split('\n')),
      map(a => a.map(b => b.split(' | '))),
      map(a => a.filter(b => b.length >= 6 && b.length <= 7)),
      map(a => a.filter(b => b[2] === 'INFO')),
      map(a => a.filter(b => b[4].includes('state:'))),
      map(a => a.map(b => ({
        time: new Date(b[0]),
        state: keysToLowerCase(JSON.parse(b[4].split('state: ').join('')))
      }))),
      // map(arr => arr.filter((v, i, a) => a.findIndex(t => (t.state.version === v.state.version)) === i)),
      map(arr => arr.map(b => {
        const state = b.state;
        b.time.setTime(b.time.getTime() + (2 * 60 * 60 * 1000));
        state.timelogged = b.time;
        return b.state;
      })),
      map(states => groupBy(states, 'id')),
      tap(groupedStates => this.selectableGames = Object.keys(groupedStates)),
      tap(() => this.stepNum = 0),
      tap(a => this.statesByGroup = a),
      tap(() => this.refreshView()),
      tap(a => console.log(a))
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
      .subscribe();
  }

  public refreshViewObservable(): Observable<any> {
    if (!this.statesByGroup || !this.selectedGame) {
      return of([]);
    }
    return of(this.statesByGroup[this.selectedGame][this.stepNum]).pipe(
      tap((res) => {
        this.state = res;
        const arr = [...new Array(14)].map(() => [...new Array(14)]);
        this.state.board.squares.flat().map((item) => {
          if (item.chip) {
            const player = this.state.players.find(pl => !!(Object.values(pl.chips).find((chip) => chip['Id'] === item.chip.id)));
            arr[14 - item.position.y][item.position.x - 1] = {
              ...item,
              playerId: player?.index
            };
          } else {
            arr[14 - item.position.y][item.position.x - 1] = item;
          }
        });
        this.state.board.squares = arr as [];
      })
    );
    // return this.server.connectToGame(this.gameFormControl.value, 'Player_Demo_' + this.playeridx).pipe(
    //   switchMap(() => this.server.state().pipe(
    //     tap((res) => {
    //       this.state = res;
    //       const arr = [...new Array(14)].map(() => [...new Array(14)]);
    //       this.state.board.squares.map((item) => {
    //         if (item.chip) {
    //           const player = this.state.players.find(pl => !!(Object.values(pl.chips).find((chip) => chip.id === item.chip.id)));
    //           arr[14 - item.position.y][item.position.x - 1] = {
    //             ...item,
    //             playerId: player.index
    //           };
    //         } else {
    //           arr[14 - item.position.y][item.position.x - 1] = item;
    //         }
    //       });
    //       this.state.board.squares = arr as [];
    //     })
    //   ))
    // );
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

  nextMove(rev): void {
    const selectedState = this.statesByGroup[this.selectedGame];
    console.log(selectedState)
    if ((!rev && (this.stepNum + 1 >= selectedState.length)) || (rev && (this.stepNum - 1 < 0))) {
      if ((!rev && (this.stepNum + 1 >= selectedState.length))) {
        this.snackBar.open('Reached end', '', {duration: 1000});
      } else {
        this.snackBar.open('Reached start', '', {duration: 1000});
      }
      return;
    }
    this.stepNum += rev ? -1 : 1;
    this.refreshView();
  }

  public getCurrentPlayer(state): any {
    return state?.players.find(a => Number(a.index) === Number(state.currentplayerindex));
  }

  convertToDate(timeA: any): Date {
    return new Date(timeA);
  }

}
