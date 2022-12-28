import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RiPageComponent } from './components/ri-page/ri-page.component';

const routes: Routes = [
  {
    path: '',
    component: RiPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiRoutingModule { }
