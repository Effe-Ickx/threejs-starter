import * as THREE from "three";

export default class Camera extends THREE.PerspectiveCamera {
  constructor(sizes:any) {
    super(75, sizes.width / sizes.height, 0.1, 100);
    
    this.position.x = 0
    this.position.y = 0
    this.position.z = 2
  }
}
