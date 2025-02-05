import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EhrRoutingModule } from './ehr-routing.module';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { EhrComponent } from './ehr.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    EhrComponent,
    PatientRegistrationComponent,
    UpdatePatientComponent
  ],
  imports: [
    CommonModule,
    EhrRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatFormFieldModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatOptionModule,
  ]
})
export class EhrModule { }
