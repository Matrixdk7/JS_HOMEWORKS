import Student from './Student.js';

// Хороший студент
const student1 = new Student('Володимир', 'Шайтан', 2000);
for (let i = 0; i < 10; i++) student1.present();
for (let i = 0; i < 10; i++) student1.mark(10);
console.log(`${student1.firstName} ${student1.lastName}: 
  Середній бал: ${student1.getAverageMark()}, 
  Середня відвідуваність: ${student1.getAverageAttendance()}, 
  Результат: ${student1.summary()}`);

// Средний студент
const student2 = new Student('Дмитро', 'Кузьмін', 2001);
for (let i = 0; i < 6; i++) student2.present();
for (let i = 0; i < 4; i++) student2.absent();
student2.mark(7);
student2.mark(8);
student2.mark(9);
student2.mark(8);
student2.mark(7);
console.log(`${student2.firstName} ${student2.lastName}: 
  Середній бал: ${student2.getAverageMark()}, 
  Середня відвідуваність: ${student2.getAverageAttendance()}, 
  Результат: ${student2.summary()}`);

// Плохой студент
const student3 = new Student('Сергій', 'Сидоров', 2002);
for (let i = 0; i < 10; i++) student3.absent();
for (let i = 0; i < 10; i++) student3.mark(4);
console.log(`${student3.firstName} ${student3.lastName}: 
  Середній бал: ${student3.getAverageMark()}, 
  Середня відвідуваність: ${student3.getAverageAttendance()}, 
  Результат: ${student3.summary()}`);