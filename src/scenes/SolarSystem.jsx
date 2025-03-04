import { useEffect, useRef } from "react";
import * as THREE from "three";

const SolarSystem = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene, Camera & Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 10, 50); // Move camera slightly upwards
        camera.lookAt(0, -30, -30);

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Sun
        const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
        const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        const sun = new THREE.Mesh(sunGeometry, sunMaterial);
        scene.add(sun);

        // Planets & Orbits
        const planetData = [
            { radius: 1, color: 0xff4500, orbitRadius: 10, orbitSpeed: 0.02 },
            { radius: 1.2, color: 0x00ff00, orbitRadius: 15, orbitSpeed: 0.015 },
            { radius: 0.8, color: 0x0000ff, orbitRadius: 20, orbitSpeed: 0.01 },
            { radius: 1.5, color: 0xff00ff, orbitRadius: 25, orbitSpeed: 0.008 },
            { radius: 2, color: 0xaaaaaa, orbitRadius: 30, orbitSpeed: 0.006 },
            { radius: 3, color: 0xffa500, orbitRadius: 40, orbitSpeed: 0.004 },
            { radius: 2.5, color: 0xadd8e6, orbitRadius: 50, orbitSpeed: 0.003 },
            { radius: 2, color: 0x800080, orbitRadius: 60, orbitSpeed: 0.002 },
        ];

        const planets = planetData.map((planet) => {
            // Create planet
            const geometry = new THREE.SphereGeometry(planet.radius, 32, 32);
            const material = new THREE.MeshBasicMaterial({ color: planet.color });
            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            // Create orbit ring
            const orbitGeometry = new THREE.RingGeometry(planet.orbitRadius - 0.2, planet.orbitRadius + 0.2, 64);
            const orbitMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa, side: THREE.DoubleSide });
            const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
            orbit.rotation.x = Math.PI / 2; // Make it flat
            scene.add(orbit);

            return { mesh, ...planet, angle: Math.random() * Math.PI * 2 };
        });

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Update Planet Positions
            planets.forEach((planet) => {
                planet.angle += planet.orbitSpeed;
                planet.mesh.position.x = Math.cos(planet.angle) * planet.orbitRadius;
                planet.mesh.position.z = Math.sin(planet.angle) * planet.orbitRadius;
            });

            renderer.render(scene, camera);
        };
        animate();

        // Resize Handling
        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} />;
};

export default SolarSystem;
