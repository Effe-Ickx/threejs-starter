import * as THREE from 'three'
 
export default class BasicLights extends THREE.Group {
  constructor() {
    super();

    const point = new THREE.PointLight(0xFFFFFF, 1, 10, 1);
    point.position.set(0, 1, 5);

    this.add(point);

  }
}