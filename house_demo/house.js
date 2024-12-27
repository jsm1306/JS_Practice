// Scene setup
const container = document.getElementById('container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// Add lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6); // Softer light
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(10, 15, 10);
scene.add(pointLight);

// Create house group
const houseGroup = new THREE.Group();

// Base (Wider and Taller)
const baseGeometry = new THREE.BoxGeometry(10, 6, 8); // Increased width and height
const baseMaterial = new THREE.MeshStandardMaterial({ color: 0xadd8e6 }); // Light blue
const base = new THREE.Mesh(baseGeometry, baseMaterial);
base.position.y = 3; // Adjusted position for height
houseGroup.add(base);

// Roof (Bright and Pretty)
const roofGeometry = new THREE.ConeGeometry(7, 4, 4); // Wider roof
const roofMaterial = new THREE.MeshStandardMaterial({ color: 0xff6347 }); // Tomato red
const roof = new THREE.Mesh(roofGeometry, roofMaterial);
roof.position.y = 8; // Adjusted for taller base
roof.rotation.y = Math.PI / 4; // Tilt for diamond-shaped roof
houseGroup.add(roof);

// Door (Centered and Bright)
const doorGeometry = new THREE.BoxGeometry(2, 3, 0.1); // Taller door
const doorMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 }); // Saddle brown
const door = new THREE.Mesh(doorGeometry, doorMaterial);
door.position.set(0, 1.5, 4.05); // Adjusted position for taller base
houseGroup.add(door);

// Windows
const windowGeometry = new THREE.BoxGeometry(2, 2, 0.1); // Square windows
const windowMaterial = new THREE.MeshStandardMaterial({ color: 0xffffe0 }); // Light yellow
// Left window
const leftWindow = new THREE.Mesh(windowGeometry, windowMaterial);
leftWindow.position.set(-3, 3, 4.05);
houseGroup.add(leftWindow);
// Right window
const rightWindow = new THREE.Mesh(windowGeometry, windowMaterial);
rightWindow.position.set(3, 3, 4.05);
houseGroup.add(rightWindow);

// Ground (Bright Green)
const groundGeometry = new THREE.PlaneGeometry(50, 50);
const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x7cfc00 }); // Lawn green
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2;
ground.position.y = 0;
scene.add(ground);

// Add house group to scene
scene.add(houseGroup);

// Camera position
camera.position.set(15, 10, 15); // Adjusted for better view
camera.lookAt(0, 3, 0);

// Render loop
function animate() {
    requestAnimationFrame(animate);
    houseGroup.rotation.y += 0.005; // Slowly rotate the house
    renderer.render(scene, camera);
}
animate();
