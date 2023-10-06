import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('ZoneRecherche',{static: false})
    searchfiled!: ElementRef;
  @Output()
    lancerRecherche: EventEmitter<string>= new EventEmitter<string>();
  constructor(){}
  /**
   * fcontion de recherche
   */
  rechercher()
  {
    const searchvalue= this.searchfiled.nativeElement.value;
    this.lancerRecherche.emit(searchvalue);
  }
}
function viewchild(): (target: HeaderComponent, propertyKey: "searchfiled") => void {
  throw new Error('Function not implemented.');
}

