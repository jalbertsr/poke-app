# Poke App

---

While developing use [this extension](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi) to avoid CORS problem.

---

| TODO                             |      DONE         |
|:--------------------------------:|:-----------------:|
| route for every pokemon detail   | initial api call  |
| filter by pokemon                | pokecard rendered |
| create pokemon details component |


---

#### NotFound Page

SEE ➡️ https://stackoverflow.com/a/42929686/6334411

```javascript
  <Switch>
    <Route exact path='/' component={Main} />
    <Route component={NotFound} />
  </Switch>
```
