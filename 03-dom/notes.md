# DOM notes

## 241. Introducing the DOM

- Document Object Model (DOM) represents a document as a tree.
- Each branch of the tree ends in a node, and each node contains objects.

## 242. The `document` Object

- The `document` object is the top-level node of the DOM tree.
- It contains methods that allow programmatic access to the tree.

### Important properties and methods

```js
document.querySelector();
document.querySelectorAll();

element.innerHTML;
element.innerText;
element.textContent;

element.getAttribute();
element.setAttribute();

element.style;

element.classList;
element.classList.add();
element.classList.remove();
element.classList.toggle();

element.children;
element.nextElementSibling;
element.nextSibling;
element.parentElement;
element.previousElementSibling;
element.previousSibling;

document.createElement();

element.append();
element.appendChild();
element.prepend();
element.remove(); // new method. called on the element to be removed
element.removeChild(); // old method. called on the parent of element to be removed

element.value;
```

## 257. The `onclick` Property

```js
element.onclick = () => {
  console.log('Hello world!');
};
```

## 258. `addEventListener`

- More flexible way to set an event handler on an element.
- Allows multiple listeners to be aassigned to an element, and for listeners to be removed if needed.

```js
element.addEventListener('click', () => {
  console.log('Hello world!');
});
```

## 260. Events and the Keyword `this`

```js
button.addEventListener('click', () => {
  this.style.backgroundColor = returnRandomColor();
  this.style.color = returnRandomColor();
});
```

## 261. Keyboard Events and Event Objects

```js
window.addEventListener('keyup', (e) => {
  switch (e.code) {
    case 'ArrowUp':
      console.log('Up');
      break;
    case 'ArrowDown':
      console.log('Down');
      break;
    case 'ArrowLeft':
      console.log('Left');
      break;
    case 'ArrowRight':
      console.log('Right');
      break;
  }
});
```

### 265. Input and Change Events

```js
input.addEventListener('change', (e) => {
  console.log(e); // runs on blur
});

input.addEventListener('input', (e) => {
  console.log(e); // runs on input
});
```

### 266. Event Bubbling

- Event bubbling describes how the browser handles events targeted at nested elements.

```js
element.addEventListener('click', (e) => {
  e.stopPropagation(); // stops event bubbling
});
```

### 267. Event Delegation

- Set an event listener on a parent rather than every child.
