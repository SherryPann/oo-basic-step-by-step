"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var Person = require('../../src/practice_11.js').Person;
var Student = require('../../src/practice_11.js').Student;
var Teacher = require('../../src/practice_11.js').Teacher;
var Klass = require('../../src/practice_11.js').Klass;

var expect = chai.expect;
chai.use(sinonChai);

describe("Person", function(){
    it("accept id,name,age as paremeters", function(){
        var person = new Person(1,'jim',12);
        expect(person.id).to.equal(1);
        expect(person.name).to.equal('jim');
        expect(person.age).to.equal(12);
    });
    it("should have a introduce method,introduce a person with id,name and age", function(){
        var person = new Person(1,'jim',12);
        var result = person.introduce();
        expect('My name is jim. I am 12 years old.').to.equal(result);
    });
});

describe('Student',function(){
    before(function(){
        var klass = new Klass(2);
    })
    it('acccept name,age as parameters',function(){
        var student = new Student(1,'jim',12,klass);
        expect(student.id).to.equal(1);
        expect(student.name).to.equal('jim');
        expect(student.age).to.equal(12);
        expect(student.klass.number).to.equal(2);
    });
    it('overwrite person introduce ,introduce a student with id,name,age and class',function(){
        var student = new Student(1,'jim',12,klass);
        klass.assignLeader(student);
        var introduce = student.introduce();
        expect(introduce).to.equal("My name is jim. I am 12 years old. I am a Student. I am Leader of Class 2.")
    });

});

describe('Teacher',function(){
    it('acccept name,age as parameters',function(){
        var klassOne = new Klass(1);
        var klassTwo = new Klass(2);
        var klasses = [klassOne,klassTwo];
        var teacher = new Teacher(1,'jim',12,klasses);
        expect(teacher.id).to.equal(1);
        expect(teacher.name).to.equal('jim');
        expect(teacher.age).to.equal(12);
        expect(teacher.klasses.length).to.equal(2);
    });
    it('overwrite person introduce,introduce a teacher with id ,name ,age and class',function(){
        var klasses = [new Klass(1),new Klass(2)];
        var teacher = new Teacher(1,'jim',12,klasses);
        var introduce = teacher.introduce();
        expect(introduce).to.equal("My name is jim. I am 12 years old. I am a Teacher. I teach Class 1, 2.");
    });
    it("should have a isTeaching method ,accecpt a student ,return true or false",function(){
        var klass = new Klass(2);
        var student = new Student(1,'jim',12,klass);
        var klasses = [new Klass(1),new Klass(2)];
        var teacher = new Teacher(1,'jim',12,klasses);
        expect(teacher.isTeaching(student)).to.equal.true;
    });

});

describe('Klass',function(){
    it('acccept number parameters',function(){
        var klass = new Klass(2);
        expect(klass.number).to.equal(2);
    });
    it('should have an assignLeader methode,accept a student as leader of the class',function(){
        var klass = new Klass(2);
        var otherKlass = new  Klass(3);
        var student = new Student(1, "Jerry", 21, otherKlass);
        var spy = sinon.spy(console, "log");
        klass.assignLeader(student);
        expect(klass.leader).not.equal(student);
        expect(spy.calledWith("It is not one of us.")).to.be.ok;
    });
    it('should have an appendMemeber method ,accept a student as one of the class',function(){
        var klass = new Klass(2);
        var otherKlass = new Klass(3);
        var student = new Student(1, "Jerry", 21, otherKlass);
        expect(student.klass).to.equal(otherKlass);
        klass.appendMember(student);
        expect(student.klass).to.equal(klass);
    });
    it('should have an isIn method ,accept a student return true or false',function(){
        var klass = new Klass(2);
        var otherKlass = new Klass(3);
        var student = new Student(1, "Jerry", 21, otherKlass);
        expect(klass.isIn(student)).to.equal.false;
    })

});