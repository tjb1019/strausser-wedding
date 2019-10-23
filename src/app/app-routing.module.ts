import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeddingComponent } from './components/wedding/wedding.component';
import { DetailsComponent } from './components/details/details.component';
import { TravelComponent } from './components/travel/travel.component';
import { RegistryComponent } from './components/registry/registry.component';


const routes: Routes = [
  {
    path: '',
    component: WeddingComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
  },
  {
    path: 'travel',
    component: TravelComponent,
  },
  {
    path: 'registry',
    component: RegistryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
