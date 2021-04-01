import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandeDetailComponent } from './page-bande/bande-detail/bande-detail.component';
import { BandeComponent } from './page-bande/bande/bande.component';

const routes: Routes = [
  { path: 'mesbandes', component: BandeComponent },
  { path: 'mesbandes/:id', component: BandeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
