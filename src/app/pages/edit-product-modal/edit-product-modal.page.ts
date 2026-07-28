import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonTitle, IonToolbar, ModalController } from '@ionic/angular/standalone';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.page.html',
  styleUrls: ['./edit-product-modal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonLabel, IonInput, IonButton]
})
export class EditProductModalPage implements OnInit {

  @Input()
    producto: any;
  constructor(
    private modalCtrl:
      ModalController,
    private supabaseService:
      SupabaseService
  ) { }

  ngOnInit() {
  }


  async guardar() {
    const { error } =
      await this.supabaseService
        .supabase
        .from('productos')
        .update({
          nombre:
            this.producto.nombre,
          precio:
            this.producto.precio,
          unidades:
            this.producto.unidades,
          imagen:
            this.producto.imagen
        })
        .eq(
          'id',
          this.producto.id
        );
    if (error) {
      console.error(error);
      return;
    }
    this.modalCtrl.dismiss(
      true
    );
  }

}//cierra clase
