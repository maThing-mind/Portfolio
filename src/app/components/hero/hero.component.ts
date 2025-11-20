import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PortfolioState } from '../../store/portfolio.reducer';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  portfolio$: Observable<PortfolioState>;

  constructor(private store: Store<{ portfolio: PortfolioState }>) {
    this.portfolio$ = this.store.select('portfolio');
  }

  ngOnInit() {}

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

