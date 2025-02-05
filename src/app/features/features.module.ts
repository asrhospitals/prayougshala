import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { NavigationComponent } from '../layout/navigation/navigation.component';
import { EhrModule } from './ehr/ehr.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { HomeComponent } from './home/home.component';
import { LabModule } from './lab/lab.module';
import { SetupsComponent } from './setups/setups.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        FeaturesComponent,
        HomeComponent,
        SetupsComponent,
        NavigationComponent
    ],
    imports: [
        CommonModule,
        FeaturesRoutingModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatCardModule,
        ReactiveFormsModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        LabModule,
        EhrModule
    ],
    providers: []
})
export class FeaturesModule { }
