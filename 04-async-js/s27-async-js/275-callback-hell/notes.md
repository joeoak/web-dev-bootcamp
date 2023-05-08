# Callback hell

- Callbacks are necessary to delay executions
  - Callbacks are used for processes that take time (e.g. retrieving data, etc.)
- Multiple callbacks can result in "callback hell" or a complex, difficult to read and maintain nesting of callbacks
- Promises mitigate "callback hell"

## Examples

```js
changeBackgroundColor("red", 1000, () => {
  changeBackgroundColor("white", 1000, () => {
    changeBackgroundColor("blue", 1000, () => {
      changeBackgroundColor("inherit", 1000);
    });
  });
});
```

```js
moviesAPI('amadeus', () => {
    saveToDatabase(movies, () => {
        // if successful, run this
    }, () => {
        // if failed, run this
    })
}, () => {
    // if API is down or request failed
}
})
```
