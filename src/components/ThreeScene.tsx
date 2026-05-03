import { useEffect } from 'react';

declare const THREE: any;

export function useThreeScene(active: boolean) {
  useEffect(() => {
    if (!active) return;
    const host = document.getElementById('threeHost');
    if (!host || typeof THREE === 'undefined') return;

    const w = host.clientWidth;
    const h = host.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    host.appendChild(renderer.domElement);

    const nodes: any[] = [];
    const links: any[] = [];

    const youGeo = new THREE.SphereGeometry(0.5, 24, 24);
    const youMat = new THREE.MeshBasicMaterial({ color: 0xFF6B35 });
    const youNode = new THREE.Mesh(youGeo, youMat);
    scene.add(youNode);
    nodes.push({ mesh: youNode, type: 'you', pos: new THREE.Vector3(0, 0, 0) });

    const auraGeo = new THREE.SphereGeometry(0.8, 24, 24);
    const auraMat = new THREE.MeshBasicMaterial({ color: 0xFF6B35, transparent: true, opacity: 0.15 });
    const aura = new THREE.Mesh(auraGeo, auraMat);
    scene.add(aura);

    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2;
      const x = Math.cos(angle) * 5;
      const y = Math.sin(angle) * 5;
      const z = (Math.random() - 0.5) * 3;
      const geo = new THREE.SphereGeometry(0.3, 16, 16);
      const mat = new THREE.MeshBasicMaterial({ color: 0xFFB627 });
      const m = new THREE.Mesh(geo, mat);
      m.position.set(x, y, z);
      scene.add(m);
      nodes.push({ mesh: m, type: 'human', pos: m.position.clone() });
    }

    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2 + 0.4;
      const x = Math.cos(angle) * 9;
      const y = Math.sin(angle) * 9;
      const z = (Math.random() - 0.5) * 5;
      const geo = new THREE.OctahedronGeometry(0.25, 0);
      const mat = new THREE.MeshBasicMaterial({ color: 0x00D9C0 });
      const m = new THREE.Mesh(geo, mat);
      m.position.set(x, y, z);
      scene.add(m);
      nodes.push({ mesh: m, type: 'ai', pos: m.position.clone() });
    }

    for (let i = 1; i < nodes.length; i++) {
      const points = [nodes[0].pos.clone(), nodes[i].pos.clone()];
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const color = nodes[i].type === 'human' ? 0xFFB627 : 0x00D9C0;
      const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.3 });
      const line = new THREE.Line(geo, mat);
      scene.add(line);
      links.push(line);
    }

    let t = 0;
    let frame = 0;
    function animate() {
      frame = requestAnimationFrame(animate);
      t += 0.005;
      scene.rotation.y = Math.sin(t * 0.4) * 0.4;
      scene.rotation.x = Math.cos(t * 0.3) * 0.15;
      aura.scale.setScalar(1 + Math.sin(t * 2) * 0.15);
      nodes.forEach((n, i) => {
        if (i > 0) {
          n.mesh.position.x = n.pos.x + Math.sin(t + i) * 0.3;
          n.mesh.position.y = n.pos.y + Math.cos(t + i * 1.3) * 0.3;
          if (n.type === 'ai') {
            n.mesh.rotation.x = t * 2;
            n.mesh.rotation.y = t * 1.5;
          }
        }
      });
      renderer.render(scene, camera);
    }
    animate();

    const ro = new ResizeObserver(() => {
      const nw = host.clientWidth, nh = host.clientHeight;
      renderer.setSize(nw, nh);
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
    });
    ro.observe(host);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [active]);
}
