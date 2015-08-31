"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var Person = require('../../src/practice_7.js').Person;
var Student = require('../../src/practice_7.js').Student;
var Teacher = require('../../src/practice_7.js').Teacher;
var expect = chai.expect;
chai.use(sinonChai);

describe("OO入门", function(){
    it("对象之间的交互-1", function(){

    });
});

describe("Person", function(){
    it('acccept name,age as parameters',function(){
        var person = new Person('haha',11);
        expect(person.name).to.equal('haha');
        expect(person.age).to.equal(11);
        expect(person.age).to.equal(11);
    });
    it('should have a introduce method,introduce a person with name,age',function(){
        var person = new Person('haha',11);
        var introduce = person.introduce();
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
    it('overwrite person introduce ,introduce a student with name,age,klass',function(){
        var student = new Student('haha',11,2);
        var introduce = student.introduce();
        expect(introduce).to.equal("My name is haha. I am 11 years old. I am a Student. I am at Class 2.")
    })
});

describe("Teacher",function(){
    it("accept name,age,student as parameters",function(){
        var teacher = new Teacher("pan",3,2);
        expect(teacher.name).to.equal("pan");
        expect(teacher.age).to.equal(3);
        expect(teacher.klass).to.equal(2);
    });
    it("overwrite person introduce ,introduce a teacher with name,age,klass",function(){
        var teacher = new Teacher("pan",3);
        expect(teacher.introduce()).to.equal("My name is pan. I am 3 years old. I am a Teacher. I teach No Class.");
        var teacher = new Teacher("pan",3,2);
        expect(teacher.introduce()).to.equal("My name is pan. I am 3 years old. I am a Teacher. I teach Class 2.");
    });
});
