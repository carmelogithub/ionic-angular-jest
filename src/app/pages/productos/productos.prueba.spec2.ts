import {ComponentFixture,TestBed} from '@angular/core/testing';
import {ProductosPage}from './productos.page';

    describe('ProductosPage2', () => {
  const productosMock = [
{
id:1,
nombre:'MacBook Pro',
precio:2499,
unidades:4
},
{
id:2,
nombre:'iPhone 16',
precio:999,
unidades:12
}
];
const productServiceMock = {
getProducts:
jasmine
.createSpy()
.and
.returnValue(
Promise.resolve(
productosMock
)
)
};
  beforeEach(
async () => {
await TestBed
.configureTestingModule({
imports:[
ProductosPage
],
providers:[
{
provide:
ProductService,
useValue:

productServiceMock
}
]
})
.compileComponents();
})}