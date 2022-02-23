import React, { useEffect } from 'react';
import {Text, Flex, Row, Col, Image} from '../../components/common/base';
import * as THREE from 'three';

export const Index = ({darkMode}) => {
    useEffect(() => {
        


			const SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;

			let container, stats;
			let camera, scene, renderer;

			let particles, count = 0;

			let mouseX = 0, mouseY = 0;

			let windowHalfX = window.innerWidth / 2;
			let windowHalfY = window.innerHeight / 2;

			init();
			animate();

			function init() {

				container = document.createElement( 'div' );
				document.getElementsByClassName("landing")[0].appendChild( container );

				camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.z = 1000;

				scene = new THREE.Scene();

				//

				const numParticles = AMOUNTX * AMOUNTY;

				const positions = new Float32Array( numParticles * 3 );
				const scales = new Float32Array( numParticles );

				let i = 0, j = 0;

				for ( let ix = 0; ix < AMOUNTX; ix ++ ) {

					for ( let iy = 0; iy < AMOUNTY; iy ++ ) {

						positions[ i ] = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 ); // x
						positions[ i + 1 ] = 0; // y
						positions[ i + 2 ] = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 ); // z

						scales[ j ] = 1;

						i += 3;
						j ++;

					}

				}

				const geometry = new THREE.BufferGeometry();
				geometry.setAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
				geometry.setAttribute( 'scale', new THREE.BufferAttribute( scales, 1 ) );

				const material = new THREE.ShaderMaterial( {

					uniforms: {
						color: { value: new THREE.Color( "white" ) },
					},
					vertexShader: document.getElementById( 'vertexshader' ).textContent,
					fragmentShader: document.getElementById( 'fragmentshader' ).textContent

				} );

				//

				particles = new THREE.Points( geometry, material );
				scene.add( particles );

				//

				renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
				renderer.setClearColor( 0x000000, 0 );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );

				// stats = new Stats();
				// container.appendChild( stats.dom );

				container.style.touchAction = 'none';
				container.addEventListener( 'pointermove', onPointerMove );

				//

				window.addEventListener( 'resize', onWindowResize );

			}

			function onWindowResize() {

				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			//

			function onPointerMove( event ) {

				if ( event.isPrimary === false ) return;

				mouseX = event.clientX - windowHalfX;
				mouseY = event.clientY - windowHalfY;

			}

			//

			function animate() {

				requestAnimationFrame( animate );

				render();
				//stats.update();

			}

			function render() {

				camera.position.x += ( mouseX - camera.position.x ) * .05;
				camera.position.y += ( - mouseY - camera.position.y ) * .05;
				camera.lookAt( scene.position );

				const positions = particles.geometry.attributes.position.array;
				const scales = particles.geometry.attributes.scale.array;

				let i = 0, j = 0;

				for ( let ix = 0; ix < AMOUNTX; ix ++ ) {

					for ( let iy = 0; iy < AMOUNTY; iy ++ ) {

						positions[ i + 1 ] = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) +
										( Math.sin( ( iy + count ) * 0.5 ) * 50 );

						scales[ j ] = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 20 +
										( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 20;

						i += 3;
						j ++;

					}

				}

				particles.geometry.attributes.position.needsUpdate = true;
				particles.geometry.attributes.scale.needsUpdate = true;

				renderer.render( scene, camera );

				count += 0.1;

			}

    })
    return (
        <Col justify="center" style={{height: '100vh', width: '100vw', overflow: 'hidden'}} position="relative">
			<div className="landing" style={{position: 'absolute', width: '100%', height: '100%', zIndex: 10}}></div>
            <Col justify="center" align="center" style={{alignSelf: "center"}} position="absolute" zIndex={10}>
                <Text zIndex={10} className="bold" size="30" color="white" style={{textShadow: '1.5px 1.5px 1.5px rgba(20, 20, 20, 0.9)'}}>BEYOND THE STATE OF THE ARTS</Text>
                <Text zIndex={10} margin="margin: 10px" color="white" className="bold" style={{textShadow: '1.5px 1.5px 1.5px rgba(20, 20, 20, 0.9)'}} size="20">WE BELIEVE THE HUMAN COLLECTIVE INTELLIGENCE</Text>
            </Col>
        </Col>
    )
};
    
export default Index;