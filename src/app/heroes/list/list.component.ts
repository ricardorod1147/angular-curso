import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Batman', 'Ironman', 'Hulk', 'Flash'];
  public deletedHero?:string;
  removeLastName(): void {
    this.deletedHero = this.heroNames.pop();
    this.heroNames.pop();
  }

}
