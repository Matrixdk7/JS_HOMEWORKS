### Homework #19

Завдання

1. Створіть об’єкт user із полями:
- _firstName (службове поле)
- _lastName (службове поле)
- createdAt (дата створення, тільки для читання)
2. Додайте accessor-властивість fullName:
- getter повертає "First Last"
- setter приймає рядок "First Last" і:
- перевіряє, що це string
- перевіряє, що є 2 слова
- кожне слово мінімум 2 символи
- якщо невалідно — кидає Error
3. Через дескриптори налаштуйте:
- _firstName, _lastName: enumerable: false
- createdAt: writable: false, configurable: false
- fullName: configurable: false, enumerable: true
4. Додайте метод lockProfile():
- після виклику об’єкт має стати sealed
- перевірте через Object.isSealed(user)
5. Виведіть у консоль:
- дескриптори всіх полів (Object.getOwnPropertyDescriptors)
- результат спроби:
- додати нове поле після lockProfile
- змінити createdAt
- видалити fullName

Зробіть версію lockHard(), яка використовує Object.freeze(user), і порівняйте поведінку із seal.