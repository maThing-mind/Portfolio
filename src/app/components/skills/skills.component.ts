import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PortfolioState } from '../../store/portfolio.reducer';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  portfolio$: Observable<PortfolioState>;
  skillCategories: { [key: string]: any[] } = {};

  constructor(private store: Store<{ portfolio: PortfolioState }>) {
    this.portfolio$ = this.store.select('portfolio');
  }

  ngOnInit() {
    this.portfolio$.subscribe(state => {
      if (state.skills) {
        this.skillCategories = state.skills.reduce((acc: any, skill: any) => {
          const category = skill.category || 'Other';
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(skill);
          return acc;
        }, {});
      }
    });
  }

  getCategories(): string[] {
    return Object.keys(this.skillCategories);
  }

  getSkillsByCategory(category: string, skills: any[]): any[] {
    return skills.filter(skill => skill.category === category);
  }
}

