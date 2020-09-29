import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ISqure} from '../../services/checkers.service';
import {MatSnackBar} from '@angular/material/snack-bar';

export interface ISelectedChipEvent {
  hasChip: boolean;
  id: number;
  isSelected: boolean;
  x: number;
  y: number;
}

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.sass']
})
export class SquareComponent implements OnInit {

  @Input() Y: number;
  @Input() X: number;
  @Input() playerIdx: number;
  @Input() square: ISqure;
  @Output() selected: EventEmitter<ISelectedChipEvent> = new EventEmitter<ISelectedChipEvent>();
  isWhite: boolean;
  isBlack: boolean;
  hasChip: boolean;
  clicked: boolean;
  isFirstPlayer: boolean;
  isSecondPlayer: boolean;
  isThirdPlayer: boolean;
  isFourthPlayer: boolean;
  constructor(private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.isWhite = !this.square.isValid;
    this.isBlack = this.square.isValid;
    this.hasChip = !!this.square.chip;
    this.isFirstPlayer = this.square.playerId === 0;
    this.isSecondPlayer = this.square.playerId === 1;
    this.isThirdPlayer = this.square.playerId === 2;
    this.isFourthPlayer = this.square.playerId === 3;
    console.log(this.isFirstPlayer);
  }

  public click(): void {
    console.log(this.square.position, {x: this.X,y: this.Y});
    this.clicked = !this.clicked;
    console.log(this.square);
    this.selected.emit({
      hasChip: this.hasChip,
      id: this.hasChip ? this.square.chip.id : null,
      isSelected: this.clicked,
      x: this.square.position.x,
      y: this.square.position.y
    });
  }

}
