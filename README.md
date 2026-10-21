# Bawb's Boba Shop 🧋

A cute, cozy game where Bawb the goblin runs a boba shop.
All art is drawn by Kaci. Code by Claude.

## Play it

Once GitHub Pages is turned on (see below), the game lives at:

**https://amoramen.github.io/bawb-game-two/**

Right now there's one tiny thing to do: click the cup to make a boba,
click again to serve it.

## Swapping in your art

See **[assets/ART_GUIDE.md](assets/ART_GUIDE.md)**. Short version: save your
drawing over the placeholder with the same name.

## How the project is laid out

```
index.html          the web page that runs the game
lib/                the Phaser game engine (don't edit)
src/
  assets.js         list of every art file the game uses
  main.js           starts the game
  scenes/
    BootScene.js    loads the art
    ShopScene.js    the shop itself
assets/
  ART_GUIDE.md      sizes and names for every drawing
  art/              all the pictures, sorted into folders
  audio/            sounds (empty for now)
```

The game uses [Phaser](https://phaser.io), a free game engine for the web.
A copy of it lives in `lib/`, so there's nothing to install.

## Turning on GitHub Pages (one time)

1. On the repo page, click **Settings**, then **Pages** in the left menu.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Pick branch **main** and folder **/ (root)**, then click **Save**.
4. Wait a minute or two, then visit the link above. After that, every
   change merged into `main` updates the game automatically.

## Running it on your own computer (optional)

Opening `index.html` by double-clicking won't load the art (browsers block it
for safety). Instead, from this folder run `python3 -m http.server` and open
http://localhost:8000. Or just use the GitHub Pages link.
