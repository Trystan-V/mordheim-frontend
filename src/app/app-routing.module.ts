import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandeComponent } from './page-bande/bande/bande.component';

const routes: Routes = [
  { path: 'mesbandes', component: BandeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
