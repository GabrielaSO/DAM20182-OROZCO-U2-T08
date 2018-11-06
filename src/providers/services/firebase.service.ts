import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFireDatabase } from '@angular/fire/database'
import 'firebase/storage'

@Injectable()
export class FirebaseService {
  private snapshotChangesSubscription: any;

  constructor(
    public http: HttpClient,
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,) {
  }
/*
  getPersons() {
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.collection('/persons').valueChanges().subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  addPerson(value) {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('/persons').add({
        rfc : value.rfc,
        nombre: value.company,
        direccion: value.address,
        numcalle:value.num,
        telefono: value.tel,
        email:value.eemail,
        activo: value.active,
      })
        .then(
          res => {
            resolve(res)
          },
          err => {
            reject(err)
          }
        )
    })
  }*/
  getPersons(){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('persons').valueChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
      })
    });
  }
  unsubscribeOnLogOut(){
    this.snapshotChangesSubscription.unsubscribe();
  }

  addPerson(value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('persons').add({
        rfc: value.rfc,
        nombre: value.nombre,
        calle: value.calle,
        numero: value.numero,
        telefono: value.telefono,
        correo: value.correo,
        activo: value.activo,
      })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }
}