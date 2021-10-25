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
    if (this.selectedHero !== hero) {
      if (this.selectedHero) {
        this.messageService.add(`HeroComponent: Changed selected hero id=${hero.id}`)
        return;
      }
      this.selectedHero = hero;
      this.messageService.add(`HeroComponent: Selected hero id=${hero.id}`)
    }
    else {
      this.selectedHero = undefined;
      this.messageService.add(`HeroComponent: Unselected hero id=${hero.id}`)
    } 
  }
    
  }
  