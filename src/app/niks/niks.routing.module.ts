import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NiksComponent } from './niks.component';

const routes: Routes = [
  {
    path: '',
    component: NiksComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NiksRoutingModule {}
