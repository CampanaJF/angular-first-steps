import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string = 'the thinker';
  public age:number = 1;


  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return this.name + ' - ' + this.age;
  }

  changeHero(newHero:string):void {
    this.name=newHero;
  }

  changeAge(newAge:number):void {
    this.age = newAge;
  }

  resetForm():void {
    this.age = 1;
    this.name = 'the thinker';

    document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML = '<h1>Desde Angular</h1>';
    });
  }

}
