describe('Bubble Sort', function(){

    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
  });

  describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    })})

  describe('Bubble Sort', function(){
    const arr = [5,3,1,2,4]
    it('Un array desordenado debe ser ordanado de menor a mayor', function(){
      expect( bubbleSort(arr) ).toEqual( [1,2,3,4,5] );
    });

    it('debería devolver las llamas swap correctas', function () {
        spyOn(window, 'swap').and.callThrough(); 
        // callThrough le dice al spy que utilice el método original chocolate['masticar'], 
        // mientras que `callFake` haría una copia.
        bubbleSort([5,3,1,2,4])
        expect(swap.calls.count()).toEqual(6);
      });
  });


  describe('Bubble Sort', function(){
    const arr = [1,2,3,4,5]
    it('Un array ordenado debe devolver un array ordenado', function(){
      expect( bubbleSort(arr) ).toEqual( [1,2,3,4,5] );
    });

    it('debería devolver las llamas swap correctas', function () {
        spyOn(window, 'swap').and.callThrough(); 
        // callThrough le dice al spy que utilice el método original chocolate['masticar'], 
        // mientras que `callFake` haría una copia.
        bubbleSort([1,2,3,4,5])
        expect(swap.calls.count()).toEqual(0);
      });
  });





  describe('Bubble Sort', function(){
    const arr = [5,4,3,2,1]
    it('handles an empty array', function(){
      expect( bubbleSort(arr)).toEqual( [1,2,3,4,5] );
    });


    it('debería devolver las llamas swap correctas', function () {
        spyOn(window, 'swap').and.callThrough(); 
       
        bubbleSort([5,4,3,2,1])
        expect(window.swap.calls.count()).toEqual(10);
      });
})

  describe('probando spies', function() {
    it('comer todo el chocolate debería llevar exactamente 3 masticadas', function () {
      spyOn(window, 'swap').and.callThrough(); 
      // callThrough le dice al spy que utilice el método original chocolate['masticar'], 
      // mientras que `callFake` haría una copia.
      bubbleSort([5,3,1,2,4])
      expect(swap.calls.count()).toEqual(6);
    });
  });
