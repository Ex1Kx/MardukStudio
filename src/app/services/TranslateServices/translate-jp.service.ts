import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateJpService {

  constructor(private translateService: TranslateService) { 
    this.translateService.use('jp');
  }
  changeLanguage(type: string) {
   this.translateService.use(type);
 }
}
