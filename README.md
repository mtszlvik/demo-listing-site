# Demo listing Site

Demo oldal: [mtszlvik.github.io/demo-listing-site](https://mtszlvik.github.io/demo-listing-site)

A oldal felépítése SPA architektúrára alapul. Az egyes oldalak egy backend API-tól kapják az adatot.
Jelenleg ez egy JSON fájlból és LocalStore-ban tárolt adatokkal van megvalósítva. Az `api.ts` fájlban vannak az ehhez tartozó függvények,
ezért egy valós backend használatához csak ezt a fájlt kell módosítani.

Az API hívásokhoz a [TanStack Query](https://tanstack.com/query/latest/docs/framework/vue/overview) könyvtárat használtam, így nem volt szükség
más state management könyvtárra, mint például a [Pinia](https://pinia.vuejs.org/).

A Bootstrap testreszabását, és az egyéb egyedi CSS megoldásokat két szinten oldotam meg. A globálisan testreszabott részek a `main.css` fájlban
találhatóak az egyes CSS változók felülírásával, és új osztályok létrehozásával.
Az egyes komponensek saját `<style></style>` blokkokban tartalmazzák az egyéb módosításokat, amiket a Bootstrap saját osztályaival nem tudtam megvalósítani.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
