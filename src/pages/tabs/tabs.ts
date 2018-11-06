import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home'
import { NewPage } from '../new/new';

//@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  HomePage = HomePage;
  NewPage = NewPage;
}