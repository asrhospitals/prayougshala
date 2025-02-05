import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { HomeComponent } from './home/home.component';
import { SetupsComponent } from './setups/setups.component';

const routes: Routes = [
  {
    path: '', component: FeaturesComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'ehr', loadChildren: () => import('./ehr/ehr.module').then(m => m.EhrModule) },
      { path: 'lab', loadChildren: () => import('./lab/lab.module').then(m => m.LabModule) },
      { path: 'setup', component: SetupsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
