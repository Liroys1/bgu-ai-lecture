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
    const camera = new THREE.PerspectiveCamera(52, w / h, 0.1, 1000);
    camera.position.set(0, 3, 20);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    host.appendChild(renderer.domElement);

    // ── YOU — top, large, orange, pulsing aura ──
    const youGeo = new THREE.SphereGeometry(0.7, 32, 32);
    const youMat = new THREE.MeshBasicMaterial({ color: 0xFF6B35 });
    const youNode = new THREE.Mesh(youGeo, youMat);
    youNode.position.set(0, 5.5, 0);
    scene.add(youNode);

    const auraGeo = new THREE.SphereGeometry(1.1, 24, 24);
    const auraMat = new THREE.MeshBasicMaterial({ color: 0xFF6B35, transparent: true, opacity: 0.12 });
    const aura = new THREE.Mesh(auraGeo, auraMat);
    aura.position.set(0, 5.5, 0);
    scene.add(aura);

    // ── HUMANS — middle ring in XZ plane ──
    const humans: any[] = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const geo = new THREE.SphereGeometry(0.28, 16, 16);
      const mat = new THREE.MeshBasicMaterial({ color: 0xFFB627 });
      const m = new THREE.Mesh(geo, mat);
      const baseX = Math.cos(angle) * 4.5;
      const baseZ = Math.sin(angle) * 4.5;
      m.position.set(baseX, 0, baseZ);
      scene.add(m);
      humans.push({ mesh: m, angle, radius: 4.5 });

      // line from human to YOU
      const pts = [m.position.clone(), youNode.position.clone()];
      const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
      const lineMat = new THREE.LineBasicMaterial({ color: 0xFFB627, transparent: true, opacity: 0.2 });
      scene.add(new THREE.Line(lineGeo, lineMat));
    }

    // ── AI AGENTS — bottom ring in XZ plane ──
    const aiNodes: any[] = [];
    for (let i = 0; i < 10; i++) {
      const angle = (i / 10) * Math.PI * 2 + 0.3;
      const geo = new THREE.OctahedronGeometry(0.22, 0);
      const mat = new THREE.MeshBasicMaterial({ color: 0x00D9C0 });
      const m = new THREE.Mesh(geo, mat);
      const baseX = Math.cos(angle) * 7;
      const baseZ = Math.sin(angle) * 7;
      m.position.set(baseX, -5.5, baseZ);
      scene.add(m);
      aiNodes.push({ mesh: m, angle, radius: 7 });

      // faint line from AI to YOU
      const pts = [m.position.clone(), youNode.position.clone()];
      const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
      const lineMat = new THREE.LineBasicMaterial({ color: 0x00D9C0, transparent: true, opacity: 0.1 });
      scene.add(new THREE.Line(lineGeo, lineMat));
    }

    // ── PARTICLE STREAM — flowing upward from AI to YOU ──
    const particles: any[] = [];
    for (let i = 0; i < 30; i++) {
      const pGeo = new THREE.SphereGeometry(0.07, 6, 6);
      const color = i < 18 ? 0x00D9C0 : 0xFFB627;
      const pMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0 });
      const p = new THREE.Mesh(pGeo, pMat);
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 2.5;
      const startY = -7 + Math.random() * 14;
      p.userData = { angle, radius, y: startY, speed: 0.018 + Math.random() * 0.022 };
      p.position.set(Math.cos(angle) * radius, startY, Math.sin(angle) * radius);
      scene.add(p);
      particles.push(p);
    }

    let t = 0;
    let frame = 0;
    function animate() {
      frame = requestAnimationFrame(animate);
      t += 0.005;

      // gentle Y-axis rotation only
      scene.rotation.y += 0.003;

      // YOU aura pulse
      aura.scale.setScalar(1 + Math.sin(t * 2.5) * 0.12);

      // humans orbit gently
      humans.forEach((h, i) => {
        const a = h.angle + t * 0.12;
        h.mesh.position.x = Math.cos(a) * h.radius;
        h.mesh.position.z = Math.sin(a) * h.radius;
        h.mesh.position.y = Math.sin(t * 0.8 + i) * 0.4;
      });

      // AI rotate
      aiNodes.forEach((n, i) => {
        const a = n.angle + t * 0.08;
        n.mesh.position.x = Math.cos(a) * n.radius;
        n.mesh.position.z = Math.sin(a) * n.radius;
        n.mesh.position.y = -5.5 + Math.sin(t + i * 0.5) * 0.3;
        n.mesh.rotation.x = t * 1.5;
        n.mesh.rotation.y = t * 2;
      });

      // particles flow upward
      particles.forEach(p => {
        p.userData.y += p.userData.speed;
        if (p.userData.y > 7) {
          p.userData.y = -7 + Math.random() * 2;
          p.userData.angle = Math.random() * Math.PI * 2;
          p.userData.radius = Math.random() * 2.5;
        }
        const y = p.userData.y;
        const progress = (y + 7) / 14;
        const opacity = progress < 0.08 ? progress / 0.08 : progress > 0.92 ? (1 - progress) / 0.08 : 0.75;
        p.material.opacity = opacity;
        p.position.x = Math.cos(p.userData.angle + t * 0.05) * p.userData.radius;
        p.position.y = y;
        p.position.z = Math.sin(p.userData.angle + t * 0.05) * p.userData.radius;
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
