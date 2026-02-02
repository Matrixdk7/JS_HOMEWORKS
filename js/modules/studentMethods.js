import Student from './Student.js';

// Посещаемость
Student.prototype.present = function() {
    for (let i = 0; i < this.attendance.length; i += 1) {
        if (this.attendance[i] === undefined) {
            this.attendance[i] = true;
            break;
        }
    }
}

Student.prototype.absent = function() {
    for (let i = 0; i < this.attendance.length; i += 1) {
        if (this.attendance[i] === undefined) {
            this.attendance[i] = false;
            break;
        }
    }
}

// Средняя посещаемость
Student.prototype.getAverageAttendance = function() {
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

// Добавление оценок
Student.prototype.mark = function(value) {
    if (value >= 0 && value <= 10) {
        for (let i = 0; i < this.estimates.length; i += 1) {
            if (this.estimates[i] === undefined) {
                this.estimates[i] = value;
                break;
            }
        }
    }
}

// Средняя оценка
Student.prototype.getAverageMark = function() {
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

// Возраст студента
Student.prototype.getAge = function() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthDate;
}

// Суммарно
Student.prototype.summary = function() {
    const avgMark = this.getAverageMark();
    const avgAttend = this.getAverageAttendance();

    if (avgMark > 9 && avgAttend > 0.9) {
        return 'Ух ти, який молодчинка!';
    } else if (avgMark >= 5 || avgAttend >= 0.5) {
        return 'Нормально, але можна краще';
    } else {
        return 'Редька!';
    }
}