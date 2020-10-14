import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ISelectedChipEvent} from './square/square.component';
import {CheckersService, Isquare} from '../services/checkers.service';
import {$e} from 'codelyzer/angular/styles/chars';
import {MatSnackBar} from '@angular/material/snack-bar';
export enum GAME_STATE {
  IDLE,
  MOVE
}
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent implements OnInit {
  @Input() board: Isquare[];
  @Input() currentPlayerIndex: number;
  @Input() playerIndex: number;
  @Output() refresh: EventEmitter<boolean> = new EventEmitter<boolean>();
  state: GAME_STATE = GAME_STATE.IDLE;
  selectedChip: number;
  constructor(private service: CheckersService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  public selected($event: ISelectedChipEvent): void {
    const x = $event.x - 1;
    const y = $event.y - 1;
    const sq = this.board[x][y];
    switch (this.state) {
      case GAME_STATE.IDLE:
        if (!!sq) {
          this.selectedChip = $event.id;
          this.state = GAME_STATE.MOVE;
        }
        break;
      case GAME_STATE.MOVE:
        this.service.move({
          chipId: this.selectedChip,
          nextPositions: [{ x: x + 1, y: y + 1 }]
        }).subscribe((res) => {
          if (!res) {this.snackbar.open('Invalid move', '', {verticalPosition: 'top', horizontalPosition: 'center', duration: 3000}); }
          this.refresh.emit(true);
        });
        this.state = GAME_STATE.IDLE;
        break;
    }
  }
}
