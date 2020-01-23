import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private db: AngularFirestore) { }

  Login() {
    return this.db.collection('user').valueChanges();
  }

}
