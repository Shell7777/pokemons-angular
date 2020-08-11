import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokeDetailsViewComponent} from 'src/app/poke-details-view/poke-details-view.component'
import { from } from 'rxjs';
const routes: Routes = [
  {path:'pokemon/:i',component:PokeDetailsViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
