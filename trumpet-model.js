import * as THREE from 'three';
import {GLTFLoader} from './vendor/GLTFLoader.js';
import {addTouches} from './alto-model.js';
// A uses the valid third-valve alternative so a direct third-valve tap matches its glow.
export const fingering=n=>[[],[1,2,3],[1,3],[2,3],[1,2],[1],[2],[],[2,3],[3],[1],[2]][((n%12)+12)%12];
export async function createTrumpet(onProgress){
 const gltf=await new GLTFLoader().loadAsync('./assets/models/trumpet.glb',onProgress);
 const model=new THREE.Group(),body=gltf.scene;
 model.add(body);body.scale.setScalar(2.8);
 model.updateMatrixWorld(true);
 const box=new THREE.Box3().setFromObject(body);body.position.sub(box.getCenter(new THREE.Vector3()));
 body.traverse(o=>{if(o.isMesh){o.material.envMapIntensity=1.25;o.material.roughness=.32;o.material.metalness=1;}});
 model.userData.keys=[];
 // Valve anchors are in normalized model space.
 addTouches(model,[{note:10,position:[-.538,.545,.305],radius:.065},{note:11,position:[-.301,.548,.303],radius:.065},{note:9,position:[-.073,.551,.300],radius:.065}]);
 model.userData.keys.forEach((k,i)=>k.userData.valve=i+1);
 return model;
}

