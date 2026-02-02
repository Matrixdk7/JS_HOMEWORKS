'use strict';

function Student(firstName, lastName, birthDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;

    this.attendance = [];
    this.estimates = [];
    this.attendance.length = 10;
    this.estimates.length = 10;
}

export default Student;