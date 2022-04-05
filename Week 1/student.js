class Student {
    constructor(name, courses) {
        this.name = name;
        this.courses = courses;
    }

    printCourses = () => this.courses.forEach(course =>console.log(`Course: ${course.name} taken during ${course.quarter}`))
}

module.exports = Student