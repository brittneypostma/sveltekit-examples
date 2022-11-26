<script>
	import { InteractiveObject, T } from '@threlte/core';
	import { spring } from 'svelte/motion';

	const scale = spring(1);
</script>

<!-- Cube -->
<T.Group scale={$scale}>
	<T.Mesh position.y={0.5} castShadow let:ref>
		<!-- Add interaction -->
		<InteractiveObject
			object={ref}
			interactive
			on:pointerenter={() => ($scale = 2)}
			on:pointerleave={() => ($scale = 1)}
		/>

		<T.BoxGeometry />
		<T.MeshStandardMaterial color="#333333" />
	</T.Mesh>
</T.Group>
