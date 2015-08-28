"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

describe("Person", function(){
    var Person = require('../../src/practice_1.js');
    var person = new Person('sherry',21);
    it("accept name and age as parameters", function(){
        var result = person.introduce();
        var expect_string = 'My name is sherry. I am 21 years old.';
        expect(person.name).to.equal('sherry');
        expect(person.age).to.equal(21);
    });
    it("return the correct introduce", function(){
        var result = person.introduce();
        expect('My name is sherry. I am 21 years old.').to.equal(result);
    });

});