import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.scss']
})
export class PatientRegistrationComponent implements OnInit {

  secondaryAddressChecked: boolean = true;

  constructor(
    // private router: Router,
    // private fb: FormBuilder,
    // private location: Location,
  ) { }

  ngOnInit(): void {
  }

  OnSameAsPrimarySelectionChange(event: any) {
    this.secondaryAddressChecked = !this.secondaryAddressChecked;
  }

}
