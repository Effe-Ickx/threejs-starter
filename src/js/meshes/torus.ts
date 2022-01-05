import * as THREE from 'three'

export default class Torus extends THREE.Mesh {
  constructor() {
    super()

    this.geometry = new THREE.TorusGeometry( .7, .2, 16, 100 );
    this.material = new THREE.MeshPhongMaterial({
      "color": new THREE.Color(0xff0000)
    })
  }

}
