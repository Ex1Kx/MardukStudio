import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateFrService {

  constructor(private translateService: TranslateService) { 
    this.translateService.use('fch');
  }
  changeLanguage(type: string) {
   this.translateService.use(type);
 }
}
