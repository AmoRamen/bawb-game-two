// Loads all the art, then starts the shop.
class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    const bar = this.add.rectangle(640, 360, 0, 24, 0xffb4c8);
    this.load.on('progress', (p) => { bar.width = 600 * p; });

    for (const [key, path] of Object.entries(ART)) {
      this.load.image(key, path);
    }
  }

  create() {
    this.scene.start('Shop');
  }
}
