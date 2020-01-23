import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register/register.service';
import { User } from 'src/app/models/user';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  clave: string;
  documentnumber: string;
  email: string;
  location: string;
  name: string;
  phone: string;
  username: string;
  user: User;

  constructor(
    private registerService: RegisterService, 
    public alertController: AlertController, 
    public toastController: ToastController,
    public router: Router) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Ojo',
      message: 'Informacion incorrecta.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Se ha registrado exitosamente.',
      duration: 2000
    });
    toast.present();
  }

  CreateUser() {
    let record = {};
    record['clave'] = this.clave;
    record['documentnumber'] = this.documentnumber;
    record['email'] = this.email;
    record['location'] = this.location;
    record['name'] = this.name;
    record['phone'] = this.phone;
    record['username'] = this.username;
    
    this.registerService.create(record).then(resp => {
      this.presentToast();
      this.router.navigate(['/']);
    })
      .catch(error => {
        this.presentAlert();
      });

  }

}
