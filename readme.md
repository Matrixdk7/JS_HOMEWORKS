### Homework #4-1

#### Task 1:

Discount in the store

Create variables:

- `hasPromoCode` – whether there is a promo code (boolean)
- `cartTotal` – amount in the cart (number)
- `isBlackFriday` – whether today is Black Friday (boolean)

The discount is applied if:

- the amount in the cart is greater than or equal to 100
and there is a promo code
or today is Black Friday.

- Create a variable `isDiscountApplied` (boolean), which is calculated using logical operators.

Output to the console:
- "Discount applied" if `isDiscountApplied === true`
- "Discount not applied" if `isDiscountApplied === false`

#### Task 2:

Login form validation

Create variables:

`email` – string with user email
`password` – string with password
`isEmailVerified` – whether email is verified (boolean)

Conditions:

- the email field is considered filled if the string is not empty
- the password field must also be not empty

The user can be allowed to continue if:
- email is filled
- password is filled
- `isEmailVerified === true`.

Create a variable `canLogin` (boolean) based on the logical expression.

Output to the console:
- "Login successful" if `canLogin === true`
- "Check data" – if `canLogin === false`