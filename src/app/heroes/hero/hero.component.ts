import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Iromen';
  public age: number = 45;

  get capitalizeName() {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name}- ${this.age}`;
  }

  changeName():void{
    this.name = "Ricardo";
  }

  changeAge():void{
    this.age = 34;
  }

  resetForm():void{
    this.name = 'Spiderman';
    this.age = 45;
  }


}
