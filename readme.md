### Homework #6-2

You need to write an implementation of the `padString` function that takes 4 arguments:

- string
- a number that is the length of the string that we want to get as a result of the function
- a character (a string with a length of 1 character) — which will be added to the string, if necessary
- a boolean parameter (true or false) that determines whether to add characters to the left or right (by default, to the right)

When writing the function, it is imperative to check the arguments that we passed, and if there are no arguments, then return a string with an error from the function (return 'some error'). The error message should be different depending on the condition under which the check failed.

The result of the function call should be displayed in the console after the function completes.

For example:

Calling `padString('hello', 8, '*')` will return the string hello***

And calling `padString('hello', 6, '*', false)` will return the string *hello

Calling `padString('hello', 2)` will return 'he' — if the number is smaller than the size of the input string, you need to truncate the string using the substring method