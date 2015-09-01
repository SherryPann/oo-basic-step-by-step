function Person(id,name,age){
    this.id = id;
    this.name = name;
    this.age = age;
}
Person.prototype.introduce = function(){
    return ('My name is ' + this.name + '. I am '+this.age + ' years old.');
}
function Klass(number){
    this.number = number;
    this.leader;
}
Klass.prototype.assignLeader = function(student){

    if(!this.equal(student.klass)){
        console.log ("It is not one of us.");
    }
    else{
        this.leader = student;
    }
}

Klass.prototype.appendMember = function(student) {
    student.klass = this;
}


Klass.prototype.equal = function(klass){
    return klass && this.number === klass.number;
}



Klass.prototype.isIn = function(student){
    if(student.klass.number === this.number){
        return true;
    }
    else{
        return false;
    }
}

function Student(id,name,age,klass){
    Person.call(this,id,name,age);
    this.klass = klass;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.super_introduce = Student.prototype.introduce;

Student.prototype.introduce = function(){
    if(this.id === this.klass.leader.id){
        return this.super_introduce() + ' I am a Student. I am Leader of Class '+this.klass.number+'.';
    }
    else{
        return this.super_introduce() + " I am a Student. I am at Class "+this.klass.number +'.';
    }
}

function Teacher(id,name,age,klasses){
    Person.call(this,id,name,age);
    this.klasses = klasses;
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.super_introduce = Teacher.prototype.introduce;

Teacher.prototype.showClasses = function(){
    return this.klasses.map(function(val){
        return  ' ' + val.number;
    })
}

Teacher.prototype.basic_introduce = function(){
    return this.super_introduce() + ' I am a Teacher. I teach ';
}

Teacher.prototype.introduce = function(){
    if(this.klasses.length > 0){
        return this.basic_introduce() + 'Class' + this.showClasses()+'.';
    }
    else {
        return this.basic_introduce() + 'NO Class.';
    }
}

Teacher.prototype.isTeaching = function(student){

    this.klasses.some(function(val){
        return val.isIn(student);
    })

}

module.exports = {
    Klass : Klass,
    Person : Person,
    Student : Student,
    Teacher : Teacher
}