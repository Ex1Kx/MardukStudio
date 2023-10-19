// Angular Imports //
import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Variable Declaration //
  private renderer!: Renderer2;
  private colorTheme!: string | null;

  constructor(
    rendererFactory: RendererFactory2
    ) 
    {
    this.renderer = rendererFactory.createRenderer(null, null);
    }
    // Init Color Mode //
   initTheme(){
    this.getColorTheme();
    this.renderer.addClass(document.body, this.colorTheme!);
   }
   // Update Color Mode //
   update(theme: 'dark-mode' | 'light-mode'){
    this.setColorTheme(theme);
    const previousColorTheme = theme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    this.renderer.removeClass(document.body, previousColorTheme);
    this.renderer.addClass(document.body, theme);
   }
   // Dark Mode Declaration //
   isDarkMode(){
    return this.colorTheme === 'dark-mode';
   }
   // Setter Color Mode //  
   private setColorTheme(theme: string){
    this.colorTheme = theme;
    localStorage.setItem('user-theme', theme);
   }
   // Getter Color Mode //
   private getColorTheme() {
    if (localStorage.getItem('user-theme')) {
      this.colorTheme = localStorage.getItem('user-theme');
    }
    else {
      this.colorTheme = 'light-mode';
    }
  }
}
