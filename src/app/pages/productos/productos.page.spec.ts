import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalController } from '@ionic/angular/standalone'; // 👈 Importa el controlador
import { ProductosPage } from './productos.page';

describe('ProductosPage', () => {
  let component: ProductosPage;
  let fixture: ComponentFixture<ProductosPage>;

  // 1. Creamos un objeto falso simulando lo que usa tu página (ej: abrir modales)
  const mockModalController = {
    create: jest.fn().mockResolvedValue({
      present: jest.fn().mockResolvedValue(true),
      onDidDismiss: jest.fn().mockResolvedValue({ data: null })
    }),
    dismiss: jest.fn().mockResolvedValue(true)
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosPage], // Componente standalone directo aquí
      
      providers: [
        // 2. SOLUCIÓN DEFINTIVA: Cuando Angular pida ModalController, dale el objeto falso
        { provide: ModalController, useValue: mockModalController }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductosPage);
    component = fixture.componentInstance;
    
    // Opcional: Si tu 'ProductosPage' llama a Supabase inmediatamente en el OnInit, 
    // podrías necesitar mockear también SupabaseService si te lanza un error después.
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
