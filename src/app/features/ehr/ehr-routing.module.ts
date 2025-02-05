import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EhrComponent } from './ehr.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';

const routes: Routes = [
  {
    path: '', component: EhrComponent,
    children: [
      { path: 'patient-registration', component: PatientRegistrationComponent },
      { path: 'update-patient', component: UpdatePatientComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EhrRoutingModule { }
