import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Selfies } from 'src/app/models/selfies';
import { LoggerService } from 'src/app/services/Logger/logger.service';
import { SelfieService } from 'src/app/services/selfies/selfie.service';

@Component({
  selector: 'app-selfies-list',
  templateUrl: './selfies-list.component.html',
  styleUrls: ['./selfies-list.component.css']
})
export class SelfiesListComponent implements OnInit{
  @Input()
  set filtre(valeur: string){
    console.log();
  }
  //creationid'un tableau d'items de type selfies
 items!: Selfies[];
 showMenu: boolean=false;
 public selfieAPreparer!:Selfies;
  //creation d'un tableau de souscription necessaire a l'utilisation d'un observable
  souscriptionSelfie: Subscription [] = [];
  /**
   *
   * @param _loggerService constructeur du composant artcile component
   */
  constructor(private _loggerService: LoggerService, private _selfieservice: SelfieService)
  {

  }
  btnClick()
  {
    this.showMenu= !(this.showMenu);
  }
  /**
   *solution evan
   */
  AffichageAddSelfie(): void
  {
    this.showMenu=true;
    this.selfieAPreparer=new Selfies();
    this.selfieAPreparer.titre="test01";
  }

  cacherAddSelfiezone(): void
  {
    this.showMenu=false
  }
  //fin solution evan
  ngOnDestroy(): void
  {
    //desouscription des elements a la destruction du composant observable
    this.souscriptionSelfie.forEach(item =>item.unsubscribe);
  }
  ngOnInit(): void {
   // this.items= this._selfieservice.getAll();

   const subscriptionEnCours= this._selfieservice.getAll_Observable().subscribe(untableau=> this.items=untableau);
   this.souscriptionSelfie.push(subscriptionEnCours);
  }
}
