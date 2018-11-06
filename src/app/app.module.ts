import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewPage } from '../pages/new/new';
import { TabsPage} from '../pages/tabs/tabs';

//Firebase Dependecies
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FirebaseService } from '../providers/services/firebase.service';
import * as firebase from 'firebase';
import { HttpClientModule } from '@angular/common/http';

const config = {
  apiKey: "AIzaSyAo5PGZ4BnXa2E9JeNS-WyeMRTEQMaNmcA",
  authDomain: "dam20182-orozco-u2-t08.firebaseapp.com",
  databaseURL: "https://dam20182-orozco-u2-t08.firebaseio.com",
  projectId: "dam20182-orozco-u2-t08",
  storageBucket: "dam20182-orozco-u2-t08.appspot.com",
  messagingSenderId: "1062629945817"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewPage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseService ,
    AngularFirestore,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
