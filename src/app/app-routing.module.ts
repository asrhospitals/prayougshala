import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './features/home/home.component';
import { SetupsComponent } from './features/setups/setups.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },  // Default route to login
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'app', loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) },
  {
    path: 'app', component: FeaturesComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'ehr', loadChildren: () => import('./features/ehr/ehr.module').then(m => m.EhrModule) },
      { path: 'lab', loadChildren: () => import('./features/lab/lab.module').then(m => m.LabModule) },
      { path: 'setup', component: SetupsComponent }
    ]
  },
  { path: '**', redirectTo: 'auth' }  // Catch-all route to redirect to auth
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
