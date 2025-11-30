### Homework #4-2
### JS Logical Operators Exercise

#### 1. `user` Object
Create a `user` object with properties:

- `name` — string
- `age` — number
- `email` — string
- `isSubscribed` — boolean
- `balance` — string (e.g., `"150.25"`)
- `verified` — string `"1"` or `"0"`

**Tasks:**
- Convert `balance` to number and `verified` to boolean.
- Determine if the user has access:
    - Age ≥ 18
    - Account verified
    - Subscribed **or** positive balance
- Compare `age` with string `"18"` using `==` and `===`, store results.
- Output access result and comparisons.
- If age < 18, store `"Access restricted due to age"` in a variable.

---

#### 2. `order` Object
Create an `order` object with properties:

- `total` — string (e.g., `"950"`)
- `currency` — string
- `isPaid` — boolean
- `delivery` — `"yes"` or `"no"`
- `priority` — `"1"` or `"0"`

**Tasks:**
- Convert `total` to number.
- Convert `delivery` and `priority` to boolean.
- Determine if the order is large (≥ 1000).
- Build a description string using `if` statements only:
    - Not paid → `"Order is not paid"`
    - Paid + delivery → `"Paid order with delivery"`
    - Large + paid → `"High-value paid order"`
    - Paid + no delivery → `"Paid order without delivery"`
    - If priority → append `" [PRIORITY]"`
- Compare `total == numberTotal` and `total === numberTotal`, store results.

---

#### 3. `systemSettings` Object
Create a `systemSettings` object with properties:

- `darkMode` — boolean
- `fontSize` — string (e.g., `"18"`)
- `language` — `"en"` or `"uk"`
- `betaAccess` — string `"true"` or `"false"`

**Tasks:**
- Convert `fontSize` to number and `betaAccess` to boolean.
- Create `isLargeFont` (font ≥ 18).
- Build a settings message using `if` statements:
    - Dark mode + large font → `"Dark mode + large font"`
    - Dark mode → `"Dark mode"`
    - Large font → `"Large font"`
    - Else → `"Default settings"`
    - If beta access → append `" (Beta tester)"`.

---

#### 4. Final Access Integration
Using all three objects, create a `finalAccess` variable:

**Full access allowed only if:**
- `user` access is allowed
- Order is paid **or** user has enough balance
- System settings valid: font > 12, language `"en"` or `"uk"`

**Requirements:**
- All checks via `if` + logical operators.
- Console output:
    - `"Full access granted"` or `"Access denied"`
    - Separately, reason for denial (`user/order/system`) using separate variables.
