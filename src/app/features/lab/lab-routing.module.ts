import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabComponent } from './lab.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { OrderDashboardComponent } from './order-dashboard/order-dashboard.component';
import { PathologyDashboardComponent } from './pathology-dashboard/pathology-dashboard.component';
import { RadiologyDashboardComponent } from './radiology-dashboard/radiology-dashboard.component';
import { TestSampleComponent } from './test-sample/test-sample.component';
import { ViewLabTestComponent } from './view-lab-test/view-lab-test.component';

const routes: Routes = [
  {
    path: '', component: LabComponent,
    children: [
      { path: 'order-dashboard', component: OrderDashboardComponent },
      { path: 'new-order', component: NewOrderComponent },
      { path: 'lab-test-sample', component: TestSampleComponent },
      { path: 'pathology-dashboard', component: PathologyDashboardComponent },
      { path: 'radiology-dashboard', component: RadiologyDashboardComponent },
      { path: 'view-lab-test', component: ViewLabTestComponent }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabRoutingModule { }
