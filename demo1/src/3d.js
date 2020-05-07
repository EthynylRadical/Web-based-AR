var renderer, scene, camera, cube
var cvs = document.getElementById('canvas')
var ctx = cvs.getContext("2d");


ctx.transform(1,0.5,-0.5,1,30,10);



function initRender(){
	renderer = new THREE.WebGLRenderer({antialias: true,canvas: cvs})
	renderer.setSize( window.innerWidth, window.innerHeight )
	document.body.appendChild( renderer.domElement )
}	

function initScene(){
    scene = new THREE.Scene()
}

function initLight(){
    let ambient = new THREE.AmbientLight( 0x666666 )
    scene.add( ambient );
    let directionalLight = new THREE.DirectionalLight( 0x887766 )
    directionalLight.position.set( -1, 1, 1 ).normalize()
    scene.add( directionalLight )
}
function initCamera(){
     camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 )
	 camera.position.z = 5
    scene.add(camera)
}
function addMesh(){
	
	var geometry = new THREE.CubeGeometry(1,1,1); 
	var material = new THREE.MeshNormalMaterial({
			transparent : true,
			opacity: 0.5,
			side: THREE.DoubleSide,
		})
	cube = new THREE.Mesh(geometry, material); 
	scene.add(cube);
	
}
var animate = function () 
{
	requestAnimationFrame( animate )
	cube.rotation.x += 0.01
	cube.rotation.y += 0.01
	renderer.render( scene, camera )
}
			
			
			
			
initRender()
initScene()
initLight()
initCamera()
addMesh()
animate()
			

			

			


			

			

			
	
	