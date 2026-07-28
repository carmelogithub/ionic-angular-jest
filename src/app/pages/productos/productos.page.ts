import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonRefresher, IonRefresherContent, IonTitle, IonToolbar, ModalController } from '@ionic/angular/standalone';
import { SupabaseService } from 'src/app/services/supabase.service';
import { EditProductModalPage } from '../edit-product-modal/edit-product-modal.page';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonLabel, IonItem, IonButton, IonRefresher, IonRefresherContent]
})
export class ProductosPage implements OnInit {

  productos: any[] = [];
  constructor(
    private supabaseService:
      SupabaseService,
    private modalCtrl:
      ModalController
  ) { }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  async ionViewWillEnter() {
    await this.cargarProductos();
  }

  async cargarProductos() {
    const {
      data,
      error
    } = await this.supabaseService
      .supabase
      .from('productos')
      .select('*');
    if (!error) {
      this.productos = data || [];
      console.table(
        this.productos
      );
    }
  }//cierra función cargarProductos

  async refrescar(event: any) {
    await this.cargarProductos();
    event.target.complete();
  }


  async editarProducto(
    producto: any
  ) {
    const modal =
      await this.modalCtrl
        .create({
          component:
            EditProductModalPage,
          componentProps: {
            producto
          }
        });
    await modal.present();
    const resultado =
      await modal
        .onDidDismiss();
    if (resultado.data) {
      await this.cargarProductos();
    }
  }

}//cierra clase