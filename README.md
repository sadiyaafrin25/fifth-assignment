1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

When we need to select an element with id we use getElementById ,When we need to select multiple elements that share the same class name we use  getElementsByClassName ,when we need to select the first element matching a CSS selector we use querySelector but if it is static collection then we use querySelectorAll

2. How do you **create and insert a new element into the DOM**?

to create a new element use the document.createElement()
and to insert element on the page use methods like appendChild(),  or append().

3. What is **Event Bubbling** and how does it work?

Event bubbling is the process of an event with the target element and bubbling up to the root of the DOM tree.

4. What is **Event Delegation** in JavaScript? Why is it useful?

Event Delegation is events for multiple child elements using a single event listener on a parent element instead of attaching an event listener to each individual child element.

event delegation avoids repetition , handles dynamic contents..

5. What is the difference between **preventDefault() and stopPropagation()** methods?

preventDefault() tells the browser not to perform its default behavior for that event
and stopPropagation() stops the event from propagating further through the DOM
