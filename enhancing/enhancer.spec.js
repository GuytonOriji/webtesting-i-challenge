const enhancer = require('./enhancer.js');
// test away!
 const{succeed, fail, repair} = require('./enhancer.js');
// test away!
function createItem(name="Link", durability = 60, enhancement= 2){
    const item = {
        name:name,
        durability:durability,
        enhancement:enhancement
    }
    return item
}

        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++
it('should run without crashing', function(){
    expect(true).toBe(true)
})




    //==ENHANCER=======================================
describe("enhancer.js", function(){






    //=====================================================================================
    describe(".repair()", function(){

        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++
        it("returns a new item ({durability:100})", function(){

          const repairItem = repair(createItem())
          expect(repairItem.durability).toBe(100)
        })
    })








    //=====================================================================================
    describe(".succeed.js", function(){


        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++
        it("returns a new item ({enhancement:1})", function(){
            let succeededItem = succeed(createItem())
            expect(succeededItem.enhancement).toBe(3)
           
        })

        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++
        it("returns a new item ({enhancement:6}", function(){
            let succeededItem = succeed(createItem("Link", 60, 5))
            expect(succeededItem.enhancement).toBe(6)
           
        })
        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++
        it("returns a new item ({enhancement:20}", function(){
        let succeededItem = succeed(createItem("Link", 60, 20))
        expect(succeededItem.enhancement).toBe(20)
           
        })
    })







    //=====================================================================================
    describe(".fail.js", function(){

        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++
        it("returns a new item ({enhancement:55} ", function(){
            let failedItem = fail(createItem())
            expect(failedItem.durability).toBe(55)
           
        })


        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++
        it("returns a new item ({enhancement:60} ", function(){
            let failedItem = fail(createItem("Link", 70, 15))
            expect(failedItem.durability).toBe(60)
           
        })


        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++
        it("returns a new item ({enhancement:16} ", function(){
            let failedItem = fail(createItem("Link", 70, 17))
            expect(failedItem.enhancement).toBe(16)
           
        })
    })  





})
    //==ENHANCER=======================================
