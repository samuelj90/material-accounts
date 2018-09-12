import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'pms-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss'],
})
export class AccountCreateComponent implements OnInit {

  accountCreateForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public snackbar: MatSnackBar, ) { }

  ngOnInit() {
    this.accountCreateForm = this.formBuilder.group({
      title: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
      description: new FormControl('', Validators.compose([Validators.required, Validators.minLength(10)])),
      balance: new FormControl('', Validators.compose([Validators.required, Validators.min(0)])),
      accountType: new FormControl('', Validators.compose([Validators.required])),
      accountParent: new FormControl(''),
      weight: new FormControl('', Validators.compose([Validators.required]))
    });
    this.accountCreateForm.valueChanges.subscribe((data) => {
      console.log(this.accountCreateForm['controls']['title']);
    });
  }

  onSubmit() {
    console.warn(this.accountCreateForm.value);
  }
}
