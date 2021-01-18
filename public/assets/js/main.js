const scene=new THREE.Scene,camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.01,1e3),renderer=new THREE.WebGLRenderer;renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(renderer.domElement),window.addEventListener("resize",()=>{var e=window.innerWidth,r=window.innerHeight;renderer.setSize(e,r),camera.aspect=e/r,camera.updateProjectionMatrix()});const geometry1=new THREE.SphereGeometry(10,10,10),material1=new THREE.MeshNormalMaterial({wireframe:!0}),sphere1=new THREE.Mesh(geometry1,material1);scene.add(sphere1);const geometry2=new THREE.SphereGeometry(10,10,10),material2=new THREE.MeshNormalMaterial({wireframe:!0}),sphere2=new THREE.Mesh(geometry2,material2);sphere2.position.z=40,scene.add(sphere2);const geometry3=new THREE.SphereGeometry(10,10,10),material3=new THREE.MeshNormalMaterial({wireframe:!0}),sphere3=new THREE.Mesh(geometry3,material3);scene.add(sphere3),sphere3.position.z=-40;const points=[];for(let e=0;e<10;e++)points.push(new THREE.Vector2(10*Math.sin(.2*e)+5,2*(e-5)));const geometry=new THREE.LatheBufferGeometry(points),material=new THREE.MeshBasicMaterial({color:2650251,wireframe:!0}),lathe=new THREE.Mesh(geometry,material);scene.add(lathe);var floorTexture=new THREE.ImageUtils.loadTexture("../../public/assets/grassTile.jpg");floorTexture.wrapS=floorTexture.wrapT=THREE.RepeatWrapping,floorTexture.repeat.set(10,10);var floorMaterial=new THREE.MeshBasicMaterial({map:floorTexture,side:THREE.DoubleSide}),floorGeometry=new THREE.PlaneGeometry(1e3,1e3,10,10),mesh=new THREE.Mesh(floorGeometry,floorMaterial);mesh.rotation.x=-Math.PI/2,mesh.receiveShadow=!0,scene.add(mesh),camera.position.z=70;const light=new THREE.AmbientLight(2650251);scene.add(light);const domEvents=new THREEx.DomEvents(camera,renderer.domElement);let sphere1Clicked=sphere2Clicked=sphere3Clicked=!1;domEvents.addEventListener(sphere1,"click",e=>{sphere1Clicked?(material1.wireframe=!0,sphere1Clicked=!1):(material1.wireframe=!1,sphere1Clicked=!0)}),domEvents.addEventListener(sphere2,"click",e=>{sphere2Clicked?(material2.wireframe=!0,sphere2Clicked=!1):(material2.wireframe=!1,sphere2Clicked=!0)}),domEvents.addEventListener(sphere3,"click",e=>{sphere3Clicked?(material3.wireframe=!0,sphere3Clicked=!1):(material3.wireframe=!1,sphere3Clicked=!0)}),controls=new THREE.OrbitControls(camera,renderer.domElement),controls.minDistance=1,controls.maxDistance=1e3;const animate=()=>{requestAnimationFrame(animate),sphere1.rotation.x+=.02,sphere1.rotation.y+=.02,sphere2.rotation.x+=.02,sphere2.rotation.y+=.02,sphere3.rotation.x+=.02,sphere3.rotation.y+=.02,controls.dollyIn(1.01),controls.zoomSpeed=1.5,controls.update(),renderer.render(scene,camera)};animate();
