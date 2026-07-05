import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath(`${import.meta.env.BASE_URL}draco/`);
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          `${import.meta.env.BASE_URL}models/character.enc`,
          "Character3D#@"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        let meshNames: string[] = [];
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                meshNames.push(child.name);
                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;
                const nameLower = child.name.toLowerCase();
                if (
                  nameLower === "plane007" ||
                  nameLower.includes("ear") ||
                  nameLower.includes("hand") ||
                  nameLower.includes("neck")
                ) {
                  // Indian skin tone
                  mesh.material = new THREE.MeshPhysicalMaterial({
                    color: new THREE.Color("#8d5524"),
                    roughness: 0.55,
                    metalness: 0.05,
                    clearcoat: 0.1,
                  });
                } else if (nameLower.includes("shirt")) {
                  // Dark Slate Professional polo / button down shirt
                  mesh.material = new THREE.MeshPhysicalMaterial({
                    color: new THREE.Color("#1e293b"),
                    roughness: 0.75,
                    metalness: 0.1,
                  });
                } else if (nameLower.includes("pant")) {
                  // Dark Charcoal Trousers
                  mesh.material = new THREE.MeshPhysicalMaterial({
                    color: new THREE.Color("#111522"),
                    roughness: 0.8,
                    metalness: 0.0,
                  });
                } else if (nameLower.includes("hair")) {
                  // Rich Dark/Black Hair
                  mesh.material = new THREE.MeshPhysicalMaterial({
                    color: new THREE.Color("#181818"),
                    roughness: 0.85,
                    metalness: 0.0,
                  });
                } else if (child.name === "Shoe") {
                  // Professional Black Leather Shoes
                  mesh.material = new THREE.MeshPhysicalMaterial({
                    color: new THREE.Color("#0c0c0c"),
                    roughness: 0.45,
                    metalness: 0.2,
                  });
                } else if (child.name === "Cube.002") {
                  // Sleek Aluminum Gray Laptop Case
                  mesh.material = new THREE.MeshPhysicalMaterial({
                    color: new THREE.Color("#2d2f34"),
                    roughness: 0.35,
                    metalness: 0.85,
                  });
                }
              }
            });
            resolve(gltf);

            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
