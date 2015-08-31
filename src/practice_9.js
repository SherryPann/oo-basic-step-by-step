function Person(id,name,age){
    this.id = id;
    this.name = name;
    this.age = age;
}
Person.prototype.introduce = function(){
    return "My name is "+this.name+". I am "+this.age+" years old."
}

function Klass(number){
    this.number = number;
    this.leader;
}
Klass.prototype.assignLeader = function(student){
    this.leader = student;
}

function Student(id,name,age,klass){
    Person.call(this,id,name,age);
    this.klass = klass;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.super_introduce = Student.prototype.introduce;

Student.prototype.introduce = function(){
    if(this.id=== this.klass.leader.id){
        return this. super_introduce()+' I am a Student. I am Leader of Class '+this.klass.number+'.';
    }
    else{
        return this.super_introduce()+" I am a Student. I am at Class "+this.klass.number+' .';
    }
}

function Teacher(id,name,age,klass){
   Person.call(this,id,name,age);
    this.klass = klass;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.super_introduce = Teacher.prototype.introduce;

Teacher.prototype.introduce = function(){
    if(this.klass){
        return this.basic_introduce() + 'Class ' + this.klass.number +'.';
    }
    else {
        return this.basic_introduce() + 'NO Class.';

    }
}

Teacher.prototype.basic_introduce = function(){
    return this.super_introduce() + ' I am a Teacher. I teach ';
}


module.exports = {
    Person : Person,
    Student : Student,
    Klass : Klass,
    Teacher : Teacher
}