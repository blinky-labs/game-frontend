export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PreloadScene' })
    }

    preload() {
        this.load.image('logo', './src/assets/spine/phaser.png');
        this.load.setPath('./src/assets/spine/spineboy');
        this.load.spine('boy', 'spineboy-pro.json', 'spineboy-pro.atlas', true);
    }

    create() {
        this.add.image(0, 0, 'logo').setOrigin(0);

        let spineBoy3 = this.add.spine(650, 300, 'boy', 'death', true);
        spineBoy3.setScale(0.4).setFlipX(true);

        let spineBoy2 = this.add.spine(100, 300, 'boy', 'shoot', true);
        spineBoy2.setScale(0.4);

        let spineBoy = this.add.spine(350, 600, 'boy', 'run', true);
        spineBoy.setScale(0.7);

        let cursors = this.input.keyboard.createCursorKeys();

        let controlConfig = {
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            zoomIn: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
            zoomOut: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),
            acceleration: 0.5,
            drag: 0.01,
            maxSpeed: 1.2
        };

        controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);

    /**
     * This is how you would dynamically import the mainScene class (with code splitting),
     * add the mainScene to the Scene Manager
     * and start the scene.
     * The name of the chunk would be 'mainScene.chunk.js
     * Find more about code splitting here: https://webpack.js.org/guides/code-splitting/
     */
    // let someCondition = true
    // if (someCondition)
    //   import(/* webpackChunkName: "mainScene" */ './mainScene').then(mainScene => {
    //     this.scene.add('MainScene', mainScene.default, true)
    //   })
    // else console.log('The mainScene class will not even be loaded by the browser')
    }
    
    update (time, delta)
        {
            controls.update(delta);
        }
}