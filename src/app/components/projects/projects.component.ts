import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PortfolioState } from '../../store/portfolio.reducer';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  portfolio$: Observable<PortfolioState>;

  constructor(private store: Store<{ portfolio: PortfolioState }>) {
    this.portfolio$ = this.store.select('portfolio');
  }

  ngOnInit() {}
}

