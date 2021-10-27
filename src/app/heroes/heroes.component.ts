import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: any;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}
    
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  
  onSelect(hero: Hero): void {
    if (!this.selectedHero) {
      this.messageService.add(`HeroComponent: Select hero id=${hero.id}`)
      this.selectedHero = hero;
    }
    else {
      if (this.selectedHero === hero) {
        this.messageService.add(`HeroComponent: Unselect hero id=${hero.id}`)
        this.selectedHero = undefined;
        return;
      }
      else {
        this.messageService.add(`HeroComponent: Change to select hero id=${hero.id}`)
        this.selectedHero = hero;
      }
    }
  }
}
 