import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModuleModule } from 'src/app/Shared/shared-module/shared-module.module';
import { SelfiesListComponent } from '../selfies-list/selfies-list.component';
import { AddSelfieComponent } from '../add-selfie/add-selfie.component';
import { SelfiesReadonlyComponent } from '../selfies-readonly/selfies-readonly.component';



@NgModule({
  declarations: [
    SelfiesListComponent,
    AddSelfieComponent,
    SelfiesReadonlyComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule
  ],
  exports:[
    SelfiesListComponent,
    AddSelfieComponent,
    SelfiesReadonlyComponent
  ]
})
export class SelfieModule { }
