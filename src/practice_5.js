function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.basic_introduce = function(){
    return ('My name is ' + this.name + '. I am '+this.age + ' years old.');
}

Person.prototype.introduce = function(){
    return this.basic_introduce();
}

function Student(name,age,klass){
    Person.call(this,name,age);
    this.klass = klass;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function(){
    return Person.prototype.basic_introduce.call(this) +  'I am a Student. I am at Class '+this.klass+'.';
}
function Worker(name,age){
    Person.call(this,name,age);
}
Worker.prototype = Object.create(Person.prototype);
Worker.prototype.constructor = Worker;

Worker.prototype.introduce = function(){
    return Person.prototype.basic_introduce.call(this) + 'I am a Worker. I have a job.';
}

module.exports = {
    Person : Person,
    Student : Student,
    Worker : Worker
};
