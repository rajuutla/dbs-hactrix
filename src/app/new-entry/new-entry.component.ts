import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntryFrom } from '../Shared/EntryFrom';
import { FetchDataService } from '../service/fetch-data.service';


@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {


  entryform: FormGroup;
  formdata: EntryFrom;

  formErrors = {
    'name': false,
    'telnum': false,
    'email': false,
    'monthlysal': false,
    'loanamt': false,
    'pancard': false
  };


  invalid: boolean = true;

  validationMessages = {
    'name': {
      'required': 'First Name is required.',
      'minlength': 'First Name must be at least 2 characters long.',
      'maxlength': 'FirstName cannot be more than 25 characters long.'
    },
    'telnum': {
      'required': 'Tel. number is required.',
      'pattern': 'Tel. number must contain only digits upto 10.'
    },
    'address': {
      'required': ' Address is required'
    },
    'email': {
      'required': 'Email is required.',
      'email': 'Email not in valid format.'
    },
    'monthlysal': {
      'required': 'Monthly salary is required',
      'pattern': 'Must contain only numbers'
    },

    'loanamt': {
      'required': 'Loan amount to be requested is required',
      'pattern': 'Must contain only numbers'
    },

    'pancard': {
      'required': 'Pancard number is required',
      'pattern': 'Must be of 10 digits'
    }
  };

  constructor(private fb: FormBuilder, private data: FetchDataService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.entryform = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      telnum: [0, [Validators.required, Validators.pattern]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      monthlysal: ['', [Validators.required, Validators.pattern]],
      Profession: [''],
      loanamt: ['', [Validators.required, Validators.pattern]],
      Intrate: 8,
      LoanTenure: [''],
      pancard: ['', [Validators.required, Validators.pattern]]
    });

    this.entryform.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }
  onValueChanged(data?: any): any {
    if (!this.entryform) { return }

    const form = this.entryform;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      console.log(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }

    //console.log('value cahanges', this.entryform);

  }



  onSubmit() {
    this.formdata = this.entryform.value;

    console.log(this.formdata);
    let dummydata: EntryFrom = new EntryFrom();
    dummydata.Name = "Basil";


    this.data.postData(this.formdata);
    this.entryform.reset();
  }



}
