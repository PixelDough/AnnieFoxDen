<script>
	import { T, useTask } from '@threlte/core';
	import { interactivity } from '@threlte/extras';
	import { Spring } from 'svelte/motion';

	interactivity();

	const scale = new Spring(1);

	let rotation = 0;
	useTask((delta) => {
		rotation += delta * 0.3;
	});
</script>

<T.PerspectiveCamera
	makeDefault
    fov={10}
	position={[5, 3, 10]}
	oncreate={(ref) => {
		ref.lookAt(0, 0, 0);
	}}
/>

<T.Mesh
    rotation.z={rotation}
    position.x={-1}
	position.y={1.5}
	scale={scale.current}
	onpointerenter={() => {
		scale.target = 1.5;
	}}
	onpointerleave={() => {
		scale.target = 1;
	}}
>
    <T.TorusGeometry args={[2, 0.15, 16, 7]} />
	<T.MeshBasicMaterial color="#6400d5" />
</T.Mesh>

<T.Mesh
    rotation.z={-rotation * 0.5}
    position.x={0.4}
	position.y={-1}
    position.z={-1}
	scale={scale.current}
	onpointerenter={() => {
		scale.target = 1.5;
	}}
	onpointerleave={() => {
		scale.target = 1;
	}}
>
    <T.TorusGeometry args={[1, 0.1, 16, 7]} />
	<T.MeshBasicMaterial color="#6400d5" />
</T.Mesh>
