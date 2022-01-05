import * as THREE from 'three'
import Lights from './lights'
import Torus from './meshes/torus';

export default class Scene extends THREE.Scene {
  constructor() {
    super();

    this.add(new Torus())
    this.add(new Lights())      
  
  }
}