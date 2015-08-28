"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var Klass = require('../../src/practice_8.js').Klass;
var Person = require('../../src/practice_8.js').Person;
var Student = require('../../src/practice_8.js').Student;
var Teacher = require('../../src/practice_8.js').Teacher;
var expect = chai.expect;
chai.use(sinonChai);

describe("Person", function(){
    it('acccept name,age as parameters',function(){
        var person = new Person('haha',11);
        expect(person.name).to.equal('haha');
        expect(person.age).to.equal(11);
        expect(person.age).to.equal(11);
    });
    it('return the correct introduce',function(){
        var person = new Person('haha',11);
        var introduce = person.introduce();
        expect(introduce).to.equal("My name is haha. I am 11 years old.")
    })
});
describe('student',function(){
    it('acccept name,age,class as parameters',function(){
        var klass = new Klass(2);
        var student = new Student('haha',11,klass);
        expect(student.name).to.equal('haha');
        expect(student.age).to.equal(11);
    });
    it('return the correct introduce',function(){
        var klass = new Klass(2);
        var student = new Student('haha',11,klass);
        var introduce = student.introduce();
        expect(introduce).to.equal("My name is haha. I am 11 years old. I am a Student. I am at Class 2.")
    })
})
describe('Teacher',function(){
    it('acccept name,age,class as parameters',function(){
        var klass = new Klass(2);
        var teacher = new Teacher('kk',11,klass);
        expect(teacher.name).to.equal('kk');
        expect(teacher.age).to.equal(11);
        expect(teacher.klass.number).to.equal(2);
    });
    it('return the correct introduce',function(){
        var klass = new Klass(2);
        var teacher = new Teacher('kk',11,klass);
        var introduce = teacher.introduce();
        expect(introduce).to.equal("My name is kk. I am 11 years old. I am a Teacher. I teach Class 2.")
    })
    it('return the correct introducewith',function(){
        var klass = new Klass(2);
        var teacher = new Teacher('kk',11,klass);
        var student = new Student('haha',11,klass);
        var introduceWith = teacher.introduceWith(student);
        expect(introduceWith).to.equal("My name is kk. I am 11 years old. I am a Teacher. I teach haha.")
    })
})