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

---

### URI Apis in use:

###### To get all 721 pokemons
- http://<i></i>pokeapi.salestock.net/api/v2/pokedex/national

###### To get info about a pokemon
- http://<i></i>pokeapi.salestock.net/api/v2/pokemon-species/<%ID%>

###### To get the image/gif of the pokemon
- http://<i></i>pokestadium.com/sprites/xy/<%POKEMON_NAME%>.gif
