import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' }, // Redirect to 'auth' for login
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }, // Auth page first
  { path: 'home', component: FeaturesComponent },
  // { path: '**', redirectTo: 'auth' }, // Fallback route to 'auth'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
