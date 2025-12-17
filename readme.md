### Homework #9-1

1. `map` + conditional transformation
    - From the array of products, make an array of strings in the format `Name: $price`, but if `inStock === false` — add (out of stock) at the end.

2. `filter` + multiple conditions
    - Filter out users who:
        - `active === true`
        - age between 18 and 35 inclusive
        - email does NOT end in @spam.com

3. `reduce` → grouping
    - Group transactions by category into an object:
        - key — category name
        - value — amount for this category

4. `find` + search by nested data
    - Find the first order that has a product with `sku === "B2"`. Return the entire order.
