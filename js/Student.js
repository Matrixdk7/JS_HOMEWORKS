'use strict';

class Student {
    firstName = null;
    lastName = null;
    birthDate = null;
    attendance = null;
    estimates = null;

    constructor(firstName, lastName, birthDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;

        this.attendance = new Array(25);
        this.estimates = [];
    }

    present() {
        for (let i = 0; i < this.attendance.length; i += 1) {
            if (this.attendance[i] === undefined) {
                this.attendance[i] = true;
                break;
            }
        }
    }

    absent() {
        for (let i = 0; i < this.attendance.length; i += 1) {
            if (this.attendance[i] === undefined) {
                this.attendance[i] = false;
                break;
            }
        }
    }

    getAverageAttendance() {
        let sum = 0;
        let count = 0;
        for (let i = 0; i < this.attendance.length; i += 1) {
            if (this.attendance[i] !== undefined) {
                count += 1;
                if (this.attendance[i] === true) {
                    sum += 1;
                }
            }
        }

        if (count === 0) {
            return 0;
        } else {
            return sum / count;
        }
    }

    mark(value) {
        if (value >= 0 && value <= 100) {
            this.estimates.push(value);
        }
    }

    getAverageMark() {
        let sum = 0;
        let count = 0;
        for (let i = 0; i < this.estimates.length; i += 1) {
            if (this.estimates[i] !== undefined) {
                sum += this.estimates[i];
                count += 1;
            }
        }
        if (count === 0) {
            return 0;
        } else {
            return sum / count;
        }
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthDate;
    }

    summary() {
        const avgMark = this.getAverageMark();
        const avgAttend = this.getAverageAttendance();

        if (avgMark > 90 && avgAttend > 0.9) {
            return 'Молодець!';
        } else if (avgMark > 90 || avgAttend > 0.9) {
            return 'Добре, але можна краще';
        } else {
            return 'Редиска!';
        }
    }
}

export default Student;