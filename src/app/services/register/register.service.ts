import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private firestore: AngularFirestore) { }
 
  create(record) {
    return this.firestore.collection('user').add(record);
  }
 
  read() {
    return this.firestore.collection('user').snapshotChanges();
  }
 
  update(recordID, record){
    this.firestore.doc('user/' + recordID).update(record);
  }
 
  delete( record_id ) {
    this.firestore.doc('user/' + record_id).delete();
  }

}
