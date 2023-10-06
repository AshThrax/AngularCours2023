import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Selfies } from 'src/app/models/selfies';
import { SelfieService } from 'src/app/services/selfies/selfie.service';

@Component({
  selector: 'app-add-selfie',
  templateUrl: './add-selfie.component.html',
  styleUrls: ['./add-selfie.component.css']
})
export class AddSelfieComponent {

  @Input()
  selfieAPreparer!: Selfies;
  //
  @Output()
  public annulerAjouter :EventEmitter<any>= new EventEmitter<any>();

  clickAnnulerAjouter(){
   this.annulerAjouter.emit({});
  }
  clickAjouter()
  {
    this._selfieService.ajouter(this.selfieAPreparer)
                        .subscribe(item => this.selfieAPreparer=item);
                        //informer le composant parent
  }
  constructor(private _selfieService: SelfieService)
  {

  }
}
