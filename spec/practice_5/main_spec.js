"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var Person = require('../../src/practice_5.js').Person;
var Student = require('../../src/practice_5.js').Student;
var Worker = require('../../src/practice_5.js').Worker;
var expect = chai.expect;
chai.use(sinonChai);
describe("Person", function(){
    it('acccept name,age as parameters',function(){
        var person = new Person('haha',11);
        expect(person.name).to.equal('haha');
        expect(person.age).to.equal(11);
        expect(person.age).to.equal(11);
    });
    it('should have a intrduce method ,introuce a person with name and age',function(){
        var person = new Person('haha',11);
        var introduce = person.basic_introduce();
        expect(introduce).to.equal("My name is haha. I am 11 years old.")
    })
});
describe('Student',function(){
    it('acccept name,age as parameters',function(){
        var student = new Student('haha',11,2);
        expect(student.name).to.equal('haha');
        expect(student.age).to.equal(11);
        expect(student.klass).to.equal(2);
    });
    it('overwrite person introduce ,introduce a student with name,age,class',function(){
        var student = new Student('haha',11,2);
        var introduce = student.introduce();
        expect(introduce).to.equal("My name is haha. I am 11 years old.I am a Student. I am at Class 2.")
    })
});
describe('Worker',function(){
    it('acccept name,age as parameters',function(){
        var worker = new Worker('haha',11);
        expect(worker.name).to.equal('haha');
        expect(worker.age).to.equal(11);
    });
    it('should overwrite person introduce ,introduce worker with name,age',function(){
        var worker = new Worker('haha',11);
        var introduce = worker.introduce();
        expect(introduce).to.equal("My name is haha. I am 11 years old.I am a Worker. I have a job.")
    })
});