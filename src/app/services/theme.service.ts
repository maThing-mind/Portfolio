import { Injectable } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'portfolio-theme';
  private currentTheme: ThemeMode = 'light';

  initTheme(): void {
    const savedTheme = localStorage.getItem(this.storageKey) as ThemeMode | null;
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    this.setTheme(savedTheme ?? preferredTheme);
  }

  toggleTheme(): void {
    this.setTheme(this.currentTheme === 'light' ? 'dark' : 'light');
  }

  getTheme(): ThemeMode {
    return this.currentTheme;
  }

  private setTheme(theme: ThemeMode): void {
    this.currentTheme = theme;
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
    localStorage.setItem(this.storageKey, theme);
  }
}
