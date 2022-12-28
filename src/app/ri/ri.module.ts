import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiRoutingModule } from './ri-routing.module';
import { RiPageComponent } from './components/ri-page/ri-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RiPageComponent
  ],
  imports: [
    CommonModule,
    RiRoutingModule,
    SharedModule
  ]
})
export class RiModule { }
