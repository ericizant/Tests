const reverse = require('./reverse')

describe("The reverse function", function(){
        
        it("should reverse the order of the words", function(){
                expect(typeof reverse("this is a test")).toEqual("string")
        })
        
        test("returns the given line of words reversed", function(){
                expect(reverse("this is a test")).toEqual("test a is this")
        })

})