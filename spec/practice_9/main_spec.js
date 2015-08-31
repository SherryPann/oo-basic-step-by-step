"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var model = require('../../src/practice_9.js');
var expect = chai.expect;
chai.use(sinonChai);

describe("OO入门", function(){
    it("对象之间的交互-3", function(){

    });
});

describe("Person",function(){
    it('accept id,name,age as parameters',function(){
        var person = new model.Person(1,'jim',12);
        expect(person.id).to.equal(1);
        expect(person.name).to.equal('jim');
        expect(person.age).to.equal(12);
    });
    it("shoud have a introduce method,introduce a person with id,name,age",function(){
        var person = new model.Person(1,'jim',12);
        expect(person.introduce()).to.equal("My name is jim. I am 12 years old.");

    })

})

describe("Student",function(){
    it('accept id,name,age as parameters',function(){
        var klass = new model.Klass(2);
        var student = new model.Student(1,'jim',12,klass);
        expect(student.id).to.equal(1);
        expect(student.name).to.equal('jim');
        expect(student.age).to.equal(12);
    });
    it("shoud have a introduce method,introduce a person with id,name,age",function(){
        var klass = new model.Klass(2);
        var student = new model.Student(1,'jim',12,klass);
        klass.assignLeader(student);
        expect(student.introduce()).to.equal("My name is jim. I am 12 years old. I am a Student. I am Leader of Class 2.");

    })

})

describe("Teacher",function(){
    it('accept id,name,age as parameters',function(){
        var klass = new model.Klass(2);
        var teacher = new model.Teacher(1,'jim',12,klass);
        expect(teacher.id).to.equal(1);
        expect(teacher.name).to.equal('jim');
        expect(teacher.age).to.equal(12);
    });
    it("shoud have a introduce method,introduce a person with id,name,age",function(){
        var teacher = new model.Teacher(1,'jim',12);
        expect(teacher.introduce()).to.equal("My name is jim. I am 12 years old. I am a Teacher. I teach NO Class.");

    })

})