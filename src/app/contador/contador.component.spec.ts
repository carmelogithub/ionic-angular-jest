

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ContadorComponent } from './contador.component';
import { IonicModule } from '@ionic/angular';

describe('ContadorComponent', () => {
  let component: ContadorComponent;
  let fixture: ComponentFixture<ContadorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [  ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });


it('Probar incremento',()=>{
  expect(component.contador).toBe(0);
  component.incrementar();
  expect(component.contador).toBe(1);
});

});
