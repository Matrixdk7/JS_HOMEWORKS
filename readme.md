# Users CRUD SPA (MVC Vanilla JS)

## Мета
Створити односторінковий застосунок, який відображає таблицю користувачів та дозволяє створювати, редагувати та видаляти користувачів через [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users), використовуючи **Promises**, **async/await**, **try/catch**, класи та **MVC-підхід**.

---

## Технічні вимоги
- **API:** `https://jsonplaceholder.typicode.com/users`
- **Стилі:** тільки Bootstrap (CDN)
- **Структура:** одна сторінка (`index.html`) + JS файли (1 або декілька)
- **Без фреймворків:** лише ванільний JS
- **Обов’язково:**
    - Використання **Promises** (мінімум один метод через `.then/.catch/.finally`)
    - **async/await** для асинхронних операцій
    - **try/catch** у всіх async-операціях
    - Класи для **Model**, **View**, **Controller**
    - **Модальні вікна Bootstrap** для create/edit/delete confirm

---

## Архітектура
### Model (`UsersModel`)
Відповідає за:
- HTTP-запити (`fetch`)
- Локальний стан `this.users`

Методи:
- `getAll()`
- `create(userData)`
- `update(id, userData)`
- `delete(id)`

Вимога по **Promises**: хоча більшість методів через async/await, **мінімум один** реалізований через `.then/.catch/.finally`.

---

### View (`UsersView`)
Відповідає за:
- Рендер таблиці
- Відкриття/закриття модалок
- Отримання даних з форм
- Показ alert’ів або toast
- Loading стан

Методи:
- `renderList(users)`
- `getCreateUserModal() / getEditUserModal(user) / getDeleteUserModal(user)`
- `getFormData()`
- `showLoading() / hideLoading()`
- `showError(message) / showSuccess(message)`

---

### Controller (`UsersController`)
Відповідає за:
- Ініціалізацію застосунку
- Підписки на події (click/submit)
- Виклики **Model** + оновлення **View**
- try/catch навколо кожної async-операції

Методи:
- `init()`
- `#addUserBtn()`
- `#handleEditUser(user)`
- `#handleDeleteUser(user)`
- `sortUsersByName()`

---

## Функціонал

### 1) Відображення списку
- При завантаженні сторінки: `GET /users`
- Відрендерити таблицю (Bootstrap table) з колонками:
    - ID, Name, Email, Phone, Company, Actions (Edit, Delete)

### 2) Створення користувача (Create)
- Кнопка “Add user” відкриває модалку
- Форма:
    - name (required)
    - email (required)
    - phone (optional)
    - company.name (optional)
- При submit:
    - Валідація полів
    - `POST /users`
    - Успіх → додати користувача в локальний масив + оновити таблицю
    - Помилка → показати повідомлення у toast

### 3) Редагування (Update)
- Кнопка **Edit** в рядку таблиці
- Відкриває модалку з заповненими даними
- При submit:
    - `PUT /users/:id`
    - Успіх → оновити локальний масив + таблицю
    - Помилка → toast

### 4) Видалення (Delete)
- Кнопка **Delete** в рядку таблиці
- Відкриває confirm-модалку
- Підтвердження → `DELETE /users/:id`
- Успіх → видалити з локального масиву + таблицю

### 5) UX-вимоги
- Під час запитів показувати **loading стан** (spinner + disabled кнопки)
- Помилки через **Bootstrap toast**
- Модалки після успіху закривати та чистити форму/стан

### 6) Додатково (опціонально)
- Пошук по name/email
- Сортування по name (клік по заголовку колонки)
- Toast замість alert
- Локальна пагінація

---

## Валідація
- `name` — не пустий
- `email` — не пустий + простий regex або `@`
- При помилці підсвітити інпут класом `is-invalid` + текст під полем

---

## Критерії приймання
- Одна сторінка, таблиця відображається після завантаження
- Create/Edit/Delete працюють через модалки
- DELETE має підтвердження в модалці
- Архітектура MVC реалізована класами
- Є async/await + try/catch
- Є Promises (.then/.catch/.finally) хоча б в одному місці
- Bootstrap-only стилізація
- Loading та error стани присутні
- (Опційно) пошук, сортування, toast, пагінація