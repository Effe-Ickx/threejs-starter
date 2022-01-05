import * as THREE from 'three'
import { WebGLRendererParameters } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import Camera from './camera'
import Scene from './scene'

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}    

export default class Renderer extends THREE.WebGLRenderer {
  controls : OrbitControls
  camera: Camera
  scene: Scene
  clock: THREE.Clock
  
  constructor(parameters?: WebGLRendererParameters) {
    super(parameters);

    this.camera = new Camera(sizes)
    this.scene = new Scene() 
    this.clock = new THREE.Clock()
      
    this.controls = new OrbitControls(this.camera, this.domElement)
    
    window.addEventListener('resize', this.resize.bind(this))   
    
    this.resize() 
    this.animate()

    document.body.appendChild(this.domElement);
  }
  
  resize() {    
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    this.camera.aspect = sizes.width / sizes.height
    this.camera.updateProjectionMatrix()

    this.setSize(sizes.width, sizes.height)
    this.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }

  animate() {
    this.controls.update()
    this.render(this.scene, this.camera)
    window.requestAnimationFrame(this.animate.bind(this))
  }

}
