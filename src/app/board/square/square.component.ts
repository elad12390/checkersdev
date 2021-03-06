import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Isquare} from '../../services/checkers.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {keysToLowerCase} from '../../../assets/states';

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
  @Input() square: Isquare;
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
    this.isWhite = !this.square['isvalid'];
    this.isBlack = this.square['isvalid'];
    this.hasChip = !!this.square.chip;
    this.isFirstPlayer = this.square.playerId === 0;
    this.isSecondPlayer = this.square.playerId === 1;
    this.isThirdPlayer = this.square.playerId === 2;
    this.isFourthPlayer = this.square.playerId === 3;
  }

  public click(): void {
    this.clicked = !this.clicked;
    this.selected.emit({
      hasChip: this.hasChip,
      id: this.hasChip ? this.square.chip.id : null,
      isSelected: this.clicked,
      x: this.square.position.x,
      y: this.square.position.y
    });
  }

}
