function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function(){
    return "My name is "+this.name +". I am "+this.age+" years old.";
}

function Student(name,age,klass){
    Person.call(this,name,age);
    this.klass = klass;
}

Student.prototype.introduce = function(){
    return ('I am a Student. I am at Class '+this.klass+'.');
}

function Worker(name,age){
    this.name = name;
    this.age = age;
}

Worker.prototype.introduce = function(){
    return "I am a Worker. I have a job."
}

module.exports = {
    Person : Person,
    Student : Student,
    Worker : Worker
}