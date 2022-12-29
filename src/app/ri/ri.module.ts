import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiRoutingModule } from './ri-routing.module';
import { RiPageComponent } from './components/ri-page/ri-page.component';
import { SharedModule } from '../shared/shared.module';
import { TabsComponent } from './components/tabs/tabs.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RiPageComponent, TabsComponent, LoginComponent],
  imports: [CommonModule, RiRoutingModule, SharedModule, ReactiveFormsModule],
})
export class RiModule {}
