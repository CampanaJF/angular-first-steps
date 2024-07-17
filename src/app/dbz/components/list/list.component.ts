import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public characterList: Character[] = [
    {name:'Yajirobe',power:750}
  ]

  onDeleteCharacter(id?:string):void{
    console.log(id);
    this.onDelete.emit(id);
  }

}
