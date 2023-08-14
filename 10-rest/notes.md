# REST notes

## GET vs. POST requests

- GET
  - Used to "get" information
  - Data is sent via query string
  - Info is visible in the URL
  - Limited amount of data can be sent
- POST
  - Used to "post" data to the server
  - Used to create/update/write
  - Data is sent via request body (not query string)
  - Able to send any kind of data (eg JSON)

```jsx
// GET request
<form action='/foo' method='get'>
  ...
</form>

// POST request
<form action='/foo' method='post'>
  ...
</form>
```

## Intro to REST

- REpresentational State Transfer (REST)
- REST is a set of guidelines for how a client and server communicate and perform CRUD operations on resources
- A "RESTful" system complies with the rules of REST
- The most common way to approach REST is by formatting the urls and http verbs in your app

## 371. RESTful Comments Update

- `PUT` and `PATCH` requests are used to update a resource
- `PUT`: Completely replaces a resource
- `PATCH`: Partially modifies a resource

## .372 Express Method Override

- HTML forms can only send `GET` and `POST` requests
- `methodOverride` allows you to to send other kinds of requests via HTML forms
