### Homework #2-2

A simple script to check access to a movie with an age restriction of 18+.

- Ask the user's age via `prompt`.
- If the user clicked `Cancel` or did not enter anything → show `alert("Age not specified")` and end there.

If the age is less than 18:
- Ask via `confirm: "You are under 18. Is there an adult with you who allows viewing?"`
- If the user clicked `OK` → `alert("Access is allowed with adult permission.")`
- If `Cancel` → `alert("Access is denied.")`
- If the age is 18 or older → `alert("Access is allowed. Enjoy watching!")`