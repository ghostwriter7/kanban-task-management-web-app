import {Injectable} from '@angular/core';
import {DarkTheme, LightTheme} from '../themes';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private activeTheme: 'LightTheme' | 'DarkTheme' = 'LightTheme';

  constructor(private storageService: StorageService) {
  }

  initTheme(): void {
      this.loadFavoriteTheme();
      this.applyTheme();
  }

  loadFavoriteTheme(): void {
    const favoriteTheme = this.storageService.get('favoriteTheme') as 'LightTheme' | 'DarkTheme';
    if (favoriteTheme) {
      this.activeTheme = favoriteTheme;
      this.applyTheme();
    }
  }

  toggleTheme(): void {
    this.activeTheme = this.activeTheme === 'LightTheme' ? 'DarkTheme' : 'LightTheme';
    this.applyTheme();
    this.saveFavoriteTheme();
  }

  private applyTheme(): void {
    const root = document.documentElement;
    const currentTheme = this.activeTheme === 'LightTheme' ? LightTheme : DarkTheme;
    Object.keys(currentTheme).forEach(key => {
      root.style.setProperty(key, currentTheme[key]);
    });
  }

  private saveFavoriteTheme(): void {
    this.storageService.set('favoriteTheme', this.activeTheme);
  }
}
