// The shop. For now there is one tiny interaction:
// click the cup to make a boba, then click it again to serve it.
class ShopScene extends Phaser.Scene {
  constructor() {
    super('Shop');
  }

  create() {
    this.drinksMade = 0;
    this.cupIsFull = false;

    this.add.image(640, 360, 'background');
    this.bawb = this.add.image(380, 400, 'bawbIdle');
    this.add.image(640, 590, 'counter');

    this.cup = this.add.image(820, 430, 'cupEmpty').setInteractive({ useHandCursor: true });
    this.cup.on('pointerdown', () => this.onCupClicked());
    this.cup.on('pointerover', () => this.cup.setScale(1.05));
    this.cup.on('pointerout', () => this.cup.setScale(1));

    this.scoreText = this.add.text(30, 24, 'Drinks served: 0', {
      fontFamily: 'sans-serif', fontSize: '32px', color: '#5a3a5a',
    });
    this.hintText = this.add.text(640, 690, 'Click the cup to make a boba!', {
      fontFamily: 'sans-serif', fontSize: '26px', color: '#ffffff',
    }).setOrigin(0.5);

    // Bawb gently bobs up and down so the shop feels alive.
    this.tweens.add({
      targets: this.bawb, y: 390, duration: 900,
      yoyo: true, repeat: -1, ease: 'Sine.easeInOut',
    });
  }

  onCupClicked() {
    if (this.cupIsFull) {
      this.serveDrink();
    } else {
      this.fillCup();
    }
  }

  fillCup() {
    this.cupIsFull = true;
    this.cup.setTexture('cupBoba');
    this.squish(this.cup);
    this.sparkles(this.cup.x, this.cup.y - 60);
    this.hintText.setText('Yum! Click again to serve it.');
  }

  serveDrink() {
    this.cupIsFull = false;
    this.drinksMade += 1;
    this.scoreText.setText('Drinks served: ' + this.drinksMade);

    this.floatText(this.cup.x, this.cup.y - 140, '+1 boba!');
    this.cup.setTexture('cupEmpty');
    this.squish(this.cup);

    this.bawb.setTexture('bawbHappy');
    this.squish(this.bawb);
    this.time.delayedCall(700, () => this.bawb.setTexture('bawbIdle'));
    this.hintText.setText('Click the cup to make another!');
  }

  // A quick squash-and-stretch bounce. This is most of the "satisfying" feel.
  squish(target) {
    this.tweens.add({
      targets: target, scaleX: 1.15, scaleY: 0.88,
      duration: 90, yoyo: true, ease: 'Quad.easeOut',
    });
  }

  sparkles(x, y) {
    for (let i = 0; i < 6; i++) {
      const s = this.add.image(x, y, 'sparkle').setScale(0.5);
      const angle = (Math.PI * 2 * i) / 6;
      this.tweens.add({
        targets: s,
        x: x + Math.cos(angle) * 90, y: y + Math.sin(angle) * 90,
        alpha: 0, scale: 0.1, duration: 500, ease: 'Cubic.easeOut',
        onComplete: () => s.destroy(),
      });
    }
  }

  floatText(x, y, message) {
    const t = this.add.text(x, y, message, {
      fontFamily: 'sans-serif', fontSize: '36px', color: '#ff6f9c',
      stroke: '#ffffff', strokeThickness: 6,
    }).setOrigin(0.5);
    this.tweens.add({
      targets: t, y: y - 70, alpha: 0, duration: 900, ease: 'Cubic.easeOut',
      onComplete: () => t.destroy(),
    });
  }
}
