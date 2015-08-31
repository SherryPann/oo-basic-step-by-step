"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var Person = require('../../src/practice_2.js').Person;
var expect = chai.expect;
chai.use(sinonChai);

describe('Person',function(){
    it("accept name,age as parameters",function(){
        var person = new Person('pan',2);
        expect(person.name).to.equal('pan');
        expect(person.age).to.equal(2);
    });
    it("will introduce a person to you",function(){
        var person = new Person('pan',2);
        var introduce = person.introduce();
        expect(introduce).to.equal("My name is pan. I am 2 years old.");
    })
})