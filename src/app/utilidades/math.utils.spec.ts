import { sumar } from "./math.utils";

describe('Prueba de sumar',()=>{
    it('sumar dos números enteros',()=>{
        const resultado=sumar(2,3);
        expect(resultado).toBe(5);
    });
});