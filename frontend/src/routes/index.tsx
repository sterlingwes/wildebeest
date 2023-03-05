import { component$ } from '@builder.io/qwik'

import './index.scss'

export default component$(() => {
	// const startStyle = `--start: ${Math.floor(Math.random() * 60)};`
	return (
		<div class="overlays" style="--start: 28">
			<div class="overlay" id="overlay_floor">
				<div id="overlay_floor-color"></div>
				<div id="overlay_floor-grid"></div>
				<div id="overlay_floor-horizon"></div>
				<div id="overlay_floor-horizon2"></div>
			</div>
			<div class="overlay overlay_mountain" id="overlay_mountain">
				<div class="overlay_mountain-mountain" id="overlay_mountain-mountain"></div>
			</div>
			<div class="overlay" id="overlay_sky"></div>
			<div class="overlay overlay_sun" id="overlay_sun">
				<div class="overlay_sun-sun" id="overlay_sun-sun"></div>
			</div>
			<div class="overlay overlay_sun" id="overlay_sun2">
				<div class="overlay_sun-sun" id="overlay_sun2-sun"></div>
			</div>
			{/* <div class="overlay overlay_sun" id="overlay_sun3">
				<div class="overlay_sun-sun" id="overlay_sun3-sun"></div>
			</div> */}
			<div class="overlay" id="overlay_overlay"></div>
			<div class="title">
				<div class="dingus">dingus</div>
				<div class="biz">business</div>
			</div>
		</div>
	)
})
