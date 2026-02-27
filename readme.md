### Homework #21

# 📸 Users → Albums → Photos (JSONPlaceholder)

Невеликий JavaScript-проєкт з використанням `fetch` та роботи з DOM.

Додаток дозволяє:

1. Завантажити список користувачів
2. Обрати альбом користувача
3. Переглянути фотографії альбому
4. Довантажувати фото порціями (пагінація)

Дані отримуються з API:  
https://jsonplaceholder.typicode.com/

---

# 🧱 HTML структура (index.html)

Необхідно створити:

```html
<select id="userSelect">
  <option value="">Select user...</option>
</select>

<select id="albumSelect" disabled>
  <option value="">Select album...</option>
</select>

<button id="loadBtn" disabled>
  Load photos
</button>

<div id="status"></div>

<div id="photos"></div>
```

## Вимоги

- `albumSelect` — disabled, поки не вибраний користувач
- `loadBtn` — disabled, поки не вибраний альбом
- `#status` — використовується для:
    - Loading повідомлень
    - Error повідомлень
- `#photos` — контейнер для карток фото

---

# ⚙️ JavaScript логіка (app.js)

## A. При завантаженні сторінки (DOMContentLoaded)

1. Показати у `#status` текст:
   ```
   Loading users...
   ```
2. Виконати `fetch /users`
3. Заповнити `#userSelect`:
    - `text = user.name`
    - `value = user.id`
4. Очистити `#status`

---

## B. Коли змінено userSelect

1. Очистити `#photos`
2. Встановити:
    - `albumSelect.disabled = true`
    - `loadBtn.disabled = true`
3. Показати:
   ```
   Loading albums...
   ```
4. Виконати `fetch /albums?userId=...`
5. Заповнити `#albumSelect`:
    - `text = album.title`
    - `value = album.id`
6. Увімкнути `albumSelect`
7. Очистити `#status`

---

## C. Коли змінено albumSelect

- Якщо альбом вибраний → увімкнути `loadBtn`
- Якщо не вибраний → `loadBtn.disabled = true`

---

## D. Коли натиснули “Load photos”

1. Очистити `#photos`
2. Показати:
   ```
   Loading photos...
   ```
3. Виконати `fetch /photos?albumId=...`
4. Відрендерити перші 12 фото
5. Якщо фото більше ніж 12 → показати кнопку:
   ```
   Load more
   ```

---

# 📄 Пагінація

Реалізація простої пагінації:

Використовуються дві змінні:

- `allPhotos` — масив усіх фото
- `offset` — поточна позиція

## Логіка

- “Load more” додає ще 12 фото
- Коли фото закінчились → кнопка ховається або disabled

---

# 🖼 Рендер фото (картка)

Для кожного фото створюється:

- `img`
    - `src = thumbnailUrl`
- `p`
    - `title` обрізати до 40 символів
    - якщо більше → додати `...`
- `a`
    - текст: `Open`
    - `href = url`
    - `target="_blank"`

---

# ❗ Обробка помилок (обов’язково)

Для кожного `fetch`:

```js
if (!res.ok) {
  throw new Error("HTTP " + res.status);
}
```

- `.catch(...)` → показати у `#status`:
  ```
  Error: ...
  ```
- `.finally(...)` → прибрати “Loading…”

---

# ✅ Критерії виконання

Проєкт вважається виконаним, якщо:

- ✅ Працює послідовність Users → Albums → Photos
- ✅ Є loader через `#status`
- ✅ Є error повідомлення
- ✅ Працює кнопка Load more
- ✅ Фото реально довантажуються порціями по 12