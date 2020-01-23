import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  clave: string;
  users: Observable<any[]>;
  user: User[];
  userFound: User;

  constructor(private router: Router,
    private loginService: LoginService,
    public toastController: ToastController) { }

  ngOnInit() {
    this.findUser();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Usuario o clave incorrecta.',
      duration: 2000
    });
    toast.present();
  }

  findUser() {
    this.loginService.Login().subscribe((data: User[]) => {
      this.user = data;
    });
  }

  login() {
    var user = this.user.filter(item => item.username === this.username);
    if (user[0].username === this.username && user[0].clave === this.clave) {
      this.router.navigate(['/home/tabs/tab1']);
      this.userFound = user[0];
    } else {
      this.presentToast();
    }

  }

}
