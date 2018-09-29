import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'pms-projects-form',
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.scss']
})
export class ProjectsFormComponent implements OnInit {
  projectForm: FormGroup;

  minDate = new Date();
  maxDate = new Date(2050, 0, 1);

  constructor(public formBuilder: FormBuilder, public snackbar: MatSnackBar) { }

  ngOnInit() {
    this.projectForm = this.formBuilder.group({
      title: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
      description: new FormControl('', Validators.compose([Validators.required])),
      startDate: new FormControl('', Validators.compose([Validators.required])),
      endDate: new FormControl('', Validators.compose([Validators.required])),
      remarks: new FormControl('', Validators.compose([Validators.required])),
      customer: new FormControl('', Validators.compose([Validators.required])),
    });
    this.projectForm.valueChanges.subscribe((data) => {
      console.log(this.projectForm['controls']['title']);
    });
  }

  onSubmit() {
    console.warn(this.projectForm.value);
  }
}
