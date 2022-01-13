import Phaser from 'phaser'
import DemoScene from './demoScene'
import * as SpinePlugin from 'phaser/plugins/spine/dist/SpinePlugin.js'

function launch(containerId) {

  console.log(window.SpinePlugin);
  return new Phaser.Game({
    type: Phaser.WEBGL,
    mode: Phaser.Scale.FIT,
    width: '100%',
    height: '100%',
    render: {
      pixelArt: true,
      antialias: false,
      antialiasGL: false
    },
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: containerId,
    scene: DemoScene,
    plugins: {
        scene: [
            { key: 'SpinePlugin', plugin: window.SpinePlugin, mapping: 'spine' }
        ]
    },
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 },
        debug: false
      }
    }
  })
}

export default launch
export { launch }
