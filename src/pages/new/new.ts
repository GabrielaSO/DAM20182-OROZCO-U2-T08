import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {
  myForm: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FormBuilder) {

    this.myForm = this.fb.group({
      rfc: ['', [
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(13),
        Validators.pattern(/^([A-Z]{3,4})?(?:-?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01]))?(?:-?)?([A-Z\d]{2})([A\d])$/)]],

      company: ['',
        [Validators.required]],
        
      address: ['',
        [Validators.required]],

      num: ['',
        [Validators.required,
        //Validators.maxLength(5), 
        Validators.pattern("^[0-9]*$")]],

      tel: ['',
        [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("^[0-9]*$")]],

      email: ['',
        [Validators.required,
        Validators.email]],

      active: ['',
        [Validators.required]],
      //password: ['', [Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
    });
  }

  saveData() {
    alert(JSON.stringify(this.myForm.value));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPage');
  }

}
