import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlanetsListComponent } from './planets-list/planets-list.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/planets', pathMatch: 'full' },
  { path: 'planets', component: PlanetsListComponent},
  { path: 'planets/:id', component: PlanetDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
