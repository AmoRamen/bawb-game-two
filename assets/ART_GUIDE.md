# Art guide for Kaci 🎨

Every picture in the game right now is a **placeholder** (it literally says
"PLACEHOLDER" on it). To put your drawing in the game, save it with the
**exact same file name, in the same folder**, replacing the placeholder.
That's it. The game picks it up automatically.

## Tips

- Save as **PNG with a transparent background** (except the shop background,
  which fills the whole screen).
- Try to keep the **same size** as the placeholder. If your drawing is a bit
  bigger or smaller that's fine, it just shows up bigger or smaller in the game.
- The whole game screen is **1280 x 720** pixels.
- File names: lowercase, underscores instead of spaces (`cup_boba.png`, not `Cup Boba.png`).

## Current art list

| File | Size (px) | What it is |
|---|---|---|
| `art/backgrounds/shop_background.png` | 1280 x 720 | The back wall of the shop, fills the screen |
| `art/shop/counter.png` | 1280 x 260 | The counter across the bottom, sits in front of Bawb |
| `art/characters/bawb_idle.png` | 300 x 380 | Bawb standing, normal face |
| `art/characters/bawb_happy.png` | 300 x 380 | Bawb happy, shown for a moment after serving |
| `art/drinks/cup_empty.png` | 160 x 220 | An empty cup |
| `art/drinks/cup_boba.png` | 160 x 220 | A finished boba drink |
| `art/effects/sparkle.png` | 64 x 64 | Little sparkle that pops out when a drink is made |

## Folders

- `art/backgrounds/` full-screen scenes
- `art/shop/` furniture and shop pieces (counter, shelves, machines)
- `art/characters/` Bawb and customers
- `art/drinks/` cups, drinks, toppings
- `art/food/` simple foods (empty for now)
- `art/ui/` buttons, icons, menus (empty for now)
- `art/effects/` sparkles, steam, hearts
- `audio/` sounds and music (empty for now)

New art that the game doesn't use yet can go in the right folder anytime.
Claude will hook it up and add it to the list in `src/assets.js`.
