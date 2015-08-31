function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.introduce = function(){
    return "My name is "+this.name+". I am "+this.age+" years old.";
}
function Student(name,age,klass){
    Person.call(this,name,age);
    this.klass = klass;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.super_introduce = Student.prototype.introduce;


Student.prototype.introduce = function(){
    return this.super_introduce() + " I am a Student. I am at Class "+this.klass+'.';
}

function Teacher(name, age,klass){
    Person.call(this,name,age);
    this.klass = klass;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.super_introduce = Teacher.prototype.introduce;

Teacher.prototype.introduce = function(){
    if(this.klass){
        return this.super_introduce()+' I am a Teacher. I teach Class '+this.klass+'.';
    }
    else{
        return this.super_introduce() + ' I am a Teacher. I teach No Class.';
    }
}

module.exports = {
    Person : Person,
    Student : Student,
    Teacher : Teacher
}