import { CommonModule } from '@angular/common'; // ✅ Use CommonModule
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

import { LabRoutingModule } from './lab-routing.module';
import { LabComponent } from './lab.component';
import { OrderDashboardComponent } from './order-dashboard/order-dashboard.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { TestSampleComponent } from './test-sample/test-sample.component';
import { PathologyDashboardComponent } from './pathology-dashboard/pathology-dashboard.component';
import { RadiologyDashboardComponent } from './radiology-dashboard/radiology-dashboard.component';
import { ViewLabTestComponent } from './view-lab-test/view-lab-test.component';

@NgModule({
    declarations: [
        LabComponent,
        OrderDashboardComponent,
        NewOrderComponent,
        TestSampleComponent,
        PathologyDashboardComponent,
        RadiologyDashboardComponent,
        ViewLabTestComponent,
    ],
    imports: [
        CommonModule,  
        LabRoutingModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        ReactiveFormsModule,
        HttpClientModule,
        ToastrModule.forRoot()
    ],
    providers: []
})
export class LabModule { }
