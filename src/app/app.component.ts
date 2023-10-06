import { LoggerService } from './services/Logger/logger.service';
import { Component } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';


import { Selfies } from './models/selfies';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_cours';
  searchValue="";
  rechercher(valeur: string){
    this.loggerService.log('AppComponent',valeur)
    this.searchValue=valeur;
  }
  /**
   * injection su service LOgger dans appComponent
   * @param loggerService
   */
  constructor(private loggerService: LoggerService)
  {

  }
}
