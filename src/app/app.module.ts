import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { PlanetsListComponent } from './planets-list/planets-list.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { BenefitsListComponent } from './benefits-list/benefits-list.component';
import { ResidentsListComponent } from './residents-list/residents-list.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from './filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsListComponent,
    PlanetDetailComponent,
    BenefitsListComponent,
    ResidentsListComponent,
    FilterComponent,
    FilterPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
