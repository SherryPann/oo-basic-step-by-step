"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var Student = require('../../src/practice_3.js').Student;
var Person = require('../../src/practice_3.js').Person;
var expect = chai.expect;
chai.use(sinonChai);

describe("Student", function(){
    it("accept name,age and class as parameters ", function(){
      var student = new Student('sherry',21,3);
        expect(student.name).to.equal('sherry');
        expect(student.age).to.equal(21);
        expect(student.klass).to.equal(3);
    });
    it('return a correct string',function(){
        var student = new Student('sherry',21,3);
        var introduce = student.introduce();
        expect(introduce).to.equal("I am a Student. I am at Class 3.");
    });
});