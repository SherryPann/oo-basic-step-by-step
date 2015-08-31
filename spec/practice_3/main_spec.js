"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var Student = require('../../src/practice_3.js').Student;
var Person = require('../../src/practice_3.js').Person;
var expect = chai.expect;
chai.use(sinonChai);

describe("Person", function(){
    it("accept name,age and class as parameters ", function(){
        var person = new Person('sherry',21);
        expect(person.name).to.equal('sherry');
        expect(person.age).to.equal(21);
    });
    it('should have a method introduce, introduce person with name and age',function(){
        var person = new Person('sherry',21);
        var introduce = person.introduce();
        expect(introduce).to.equal("My name is sherry. I am 21 years old.");
    });
});

describe("Student", function(){
    it("accept name,age and class as parameters ", function(){
      var student = new Student('sherry',21,3);
        expect(student.name).to.equal('sherry');
        expect(student.age).to.equal(21);
        expect(student.klass).to.equal(3);
    });
    it('should have a method introduce,introuce a Student with name,age and class',function(){
        var student = new Student('sherry',21,3);
        var introduce = student.introduce();
        expect(introduce).to.equal("I am a Student. I am at Class 3.");
    });
});