import * as THREE from "/build/three.module.js";
import { WIDTH, HEIGHT } from "../utils/config.js";

let scene, camera, renderer, stars;

let lastTime = 0;

function init(backgroundSpace) {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, WIDTH / HEIGHT, 1, 2000);
    camera.position.z = 1;

    renderer = new THREE.WebGLRenderer({
        canvas: backgroundSpace,
        antialias: true,
        alpha: true
    });

    renderer.setSize(WIDTH, HEIGHT);

    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();

    let starGeo = new THREE.BufferGeometry();
    const points = [];

    for(let i = 0; i < 6000; i++) {
        points.push(Math.random() * 600 - 300); //X
        points.push(Math.random() * 600 - 300); // Y
        points.push(Math.random() * 600 - 300); // Z
    }

    starGeo.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));

    let starSprite = new THREE.TextureLoader().load("./assets/images/background/star.png");
    let starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 1.5,
        map: starSprite,
        transparent: true,
        alphaTest: 0.5,
        blending: THREE.AdditiveBlending
    });

    stars = new THREE.Points(starGeo, starMaterial);
    scene.add(stars);
}

function updateStars() {
    const currentTime = performance.now();
    const deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    const positions = stars.geometry.attributes.position.array;

    for(let i = 0; i < 6000; i++) {
        let yIndex = i * 3 + 1;

        positions[yIndex] -=  0.01 * deltaTime;

        if(positions[yIndex] < -500) {
            positions[yIndex] = 500;
        }

        stars.geometry.attributes.position.needsUpdate = true;

        stars.rotation.y += 0.002;
    }
}

export {
    init,
    updateStars,
    scene,
    camera,
    renderer
}