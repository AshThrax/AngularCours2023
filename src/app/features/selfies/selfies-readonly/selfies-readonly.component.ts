import { Component, Input } from '@angular/core';
import { Selfies } from 'src/app/models/selfies';

@Component({
  selector: 'app-selfies-readonly',
  templateUrl: './selfies-readonly.component.html',
  styleUrls: ['./selfies-readonly.component.css']
})
export class SelfiesReadonlyComponent  {

  @Input()
  public unitem!: Selfies;

  constructor()
  {
    /**this.unitem;
     */
  }

}
