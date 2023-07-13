describe('Split Array function', function() {
    it('es capaz de dividir el arreglo en dos partes', function() {
        let arr = [2,5,4,3,0,1,7,6,9,8]
        expect( split([2,5,4,3,0,1,7,6,9,8]) ).toEqual( [[2,5,4,3,0],[1,7,6,9,8]] );
    });
  });