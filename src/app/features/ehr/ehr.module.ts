import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EhrRoutingModule } from './ehr-routing.module';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { EhrComponent } from './ehr.component';


@NgModule({
  declarations: [
    EhrComponent,
    PatientRegistrationComponent,
    UpdatePatientComponent
  ],
  imports: [
    CommonModule,
    EhrRoutingModule,
  ]
})
export class EhrModule { }
