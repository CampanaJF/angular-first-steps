import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

    public characters:Character[] = [
    {id:uuid(),name:'Krillin',power:3000},
    {id:uuid(),name:'Goku',power:9500},
    {id:uuid(),name:'Piccolo',power:7000}
  ];

  addCharacter( character:Character ):void{

    const newCharacter: Character = {...character, id: uuid()};

    console.log(newCharacter);
    this.characters.push(newCharacter);
  }

  // onDeleteCharacer( id:number ):void{
  //   console.log(id);
  //   this.characters.splice(id,1);
  // }

  deleteCharacterById( id:string ):void{
      this.characters = this.characters.filter( character => character.id !== id);
  }

}
