import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public Date: String;

  ionViewDidEnter() {
    this.Date = "01-27-2000";
  }

  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Warning',
      subHeader: 'Big Alert',
      message: 'Yeeaahhh smash that like button',
      buttons: ['OK', 'Sweet nice one']
    });

    await alert.present();
  }
}
