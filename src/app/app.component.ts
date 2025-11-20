import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadPortfolio } from './store/portfolio.actions';
import { PortfolioState } from './store/portfolio.reducer';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  portfolio$: Observable<PortfolioState>;

  constructor(private store: Store<{ portfolio: PortfolioState }>) {
    this.portfolio$ = this.store.select('portfolio');
  }

  ngOnInit() {
    this.store.dispatch(loadPortfolio());
  }
}

