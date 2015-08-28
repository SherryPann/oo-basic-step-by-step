function Person(name,age){
    this.name = name;
    this.age = age;
}

function Student(name,age,klass){
    Person.call(this,name,age);
    this.klass = klass;
}

Student.prototype.introduce = function(){
    return ('I am a Student. I am at Class '+this.klass+'.');
}

module.exports = {
    Person : Person,
    Student : Student
}