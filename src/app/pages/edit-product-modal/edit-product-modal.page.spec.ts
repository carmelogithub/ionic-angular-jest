import { ComponentFixture, TestBed } from '@angular/core/testing';
// 1. Importamos el controlador desde ambas rutas posibles para curarnos en salud
import { ModalController as ModalStandalone } from '@ionic/angular/standalone';
import { ModalController as ModalNormal } from '@ionic/angular';
import { EditProductModalPage } from './edit-product-modal.page';

describe('EditProductModalPage', () => {
  let component: EditProductModalPage;
  let fixture: ComponentFixture<EditProductModalPage>;

  // 2. Creamos un objeto simulado básico
  const mockModalController = {
    dismiss: jest.fn().mockResolvedValue(true),
    create: jest.fn().mockResolvedValue({
      present: jest.fn().mockResolvedValue(true)
    })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditProductModalPage], // Componente standalone en imports
      providers: [
        // 3. Proveemos el mock para ambos tokens. Así, use la ruta que use tu página, Jest la resolverá
        { provide: ModalStandalone, useValue: mockModalController },
        { provide: ModalNormal, useValue: mockModalController }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditProductModalPage);
    component = fixture.componentInstance;
    component.producto = {
      nombre: 'Producto de prueba',
      precio: 10,
      id: '1'
      // Añade aquí el resto de campos mínimos que use el HTML de tu modal
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

