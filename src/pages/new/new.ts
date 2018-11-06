import { Component } from '@angular/core';
import { IonicPage,AlertController, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FirebaseService } from '../../providers/services/firebase.service';


@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {
  validations_form: FormGroup;
  errorMessage: string = '';
  validation_messages = {
    'rfc': [
      { type: 'required', message: 'ingrese un RFC correcto' },
      { type: 'pattern', message: 'Se requiere un  RFC Valido.' },
      { type: 'minlength', message: 'debe contener minimo 12 caracteres' },
      { type: 'maxlength', message: 'debe contener maximo 13 caracteres' }
    ],
    'nombre': [
      { type: 'required', message: 'Se requiere un nombre o razon ' },
    ],
    'calle': [
      { type: 'required', message: 'Se requiere una calle ' },
    ],
    'numero': [
      { type: 'required', message: 'Se requiere numero de calle ' },
      { type: 'pattern', message: 'Se requiere un numero Valido.' }
    ],
    'telefono': [
      { type: 'required', message: 'Se requiere un telefono ' },
      { type: 'minlength', message: 'debe contener min 7 caracteres' },
      { type: 'pattern', message: 'Se requiere un telefono Valido.' }
    ],
    'correo': [
      { type: 'required', message: 'Se requiere un correo ' },
      { type: 'pattern', message: 'Se requiere un correo valido' }
    ],
    'activo': [
      { type: 'required', message: 'seleccione la opcion' },
    ]
  };
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public fb: FormBuilder,
    private db: FirebaseService) {}

  ionViewWillLoad() {
    this.validations_form = this.fb.group({
      rfc: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(12),
          Validators.maxLength(13),
          Validators.pattern(/^([A-Z]{3,4})?(?:-?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01]))?(?:-?)?([A-Z\d]{2})([A\d])$/)
        ])),

      nombre: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])),

      calle: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])),

      numero: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]*$")
          //Validators.maxLength(5), 
        ])),

      telefono: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern("^[0-9]*$")
        ])),

      correo: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.email
        ])),

      activo: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ]))
    });
  }

  addPerson(valor) {    
    //alert(valor);
    this.db.addPerson(valor);
    //alert(JSON.stringify(this.myForm.value));
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Información' ,
      subTitle: 'Guardado exitosamente',
      buttons: ['Gracias!']
    });
    alert.present();
  } 
  /*
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPage');
  }
  */

}
