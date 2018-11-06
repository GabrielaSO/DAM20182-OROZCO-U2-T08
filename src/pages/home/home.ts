import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseService } from '../../providers/services/firebase.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  persons: any;

  constructor(
    public navCtrl: NavController,
    private db: FirebaseService) {
    this.db.getPersons().then(persons => {
        this.persons = persons;
      });
  }

  ionViewDidEnter() {
    this.db.getPersons()
    .then(persons => {
      this.persons = persons;
      console.log('onViewDidEnter');
      console.log(this.persons);
    });
  }
 /* getCompanies() {

  }*/

}
