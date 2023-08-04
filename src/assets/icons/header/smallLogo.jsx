import * as React from "react";
const SmallLogo = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		width={70}
		height={44}
		fill='none'
		{...props}>
		<g
			fill='#333'
			clipPath='url(#a)'>
			<path d='m45.635 21.104 1.278 2.95c.237.544.887.801 1.455.575.568-.223.838-.846.602-1.39l-1.278-2.95-2.057.815Z' />
			<path d='m46.488 23.07 2.057-.814-2.057.815Zm-3.551-8.193 2.91 1.152-2.91-1.152Zm1.583-5.981c0 1.568-1.329 2.839-2.967 2.839-1.64 0-2.97-1.27-2.97-2.839 0-1.567 1.33-2.837 2.97-2.837 1.638 0 2.967 1.27 2.967 2.837Z' />
			<path d='M43.036 8.896c0 .785-.664 1.42-1.483 1.42-.82 0-1.486-.635-1.486-1.42 0-.783.666-1.419 1.486-1.419.819 0 1.483.636 1.483 1.42ZM39.47 10.92l-4.06 9.37-1.018 4.205.686.271 2.39-3.662.568-1.31c-.443-1.025.065-2.2 1.136-2.623l2.355-5.437a3.03 3.03 0 0 1-2.056-.814Zm4.163-.001c-.531.5-1.256.809-2.057.815l3.493 8.058 2.056-.814-3.492-8.06Zm-.968-6.279V1.445c0-.588-.5-1.065-1.113-1.065-.615 0-1.113.476-1.113 1.065V4.64h2.226Zm-1.112 1.419c.19 0 .375.018.555.05V4.64h-1.112v1.47c.18-.032.365-.05.557-.05ZM26.096 25.94h-3.703V.38h3.703c.819 0 1.481.637 1.481 1.421v22.72c0 .785-.663 1.42-1.481 1.42Z' />
			<path d='M25.911 2.511a.545.545 0 0 0 .556-.532.545.545 0 0 0-.556-.533.544.544 0 0 0-.556.533c0 .294.25.532.556.532ZM30.17 15.47c0 .293.248.532.555.532.307 0 .556-.24.556-.532a.545.545 0 0 1-.556.532.545.545 0 0 1-.556-.532Z' />
			<path d='M30.91.38c-.408 0-.74.32-.74.712v14.91l1.11 4.26 1.111-4.26V1.092c0-.392-.331-.71-.74-.71L30.91.38Z' />
		</g>
		<path
			fill='url(#b)'
			d='M68.552 31.405H0v12.452h68.552V31.405Z'
		/>
		<defs>
			<clipPath id='a'>
				<path
					fill='#fff'
					d='M1.448.143H70V41.67H1.448z'
				/>
			</clipPath>
			<pattern
				id='b'
				width={1}
				height={1}
				patternContentUnits='objectBoundingBox'>
				<use
					xlinkHref='#c'
					transform='scale(.0009 .00478)'
				/>
			</pattern>
			<image
				xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABE8AAADRCAQAAACXiFS8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTEyLTEyVDE0OjQxOjEzKzA2OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTEyLTEyVDE0OjQxOjEzKzA2OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0xMi0xMlQxNDo0MToxMyswNjowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2N2JkZTYwOC04M2U4LTA2NGUtYTgzOS1kNjQ0ZWEyNTE0Y2IiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphNGNmMzAyNi00YTU1LWM0NGQtYmIy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'
				id='c'
				width={1103}
				height={209}
			/>
		</defs>
	</svg>
);
export default SmallLogo;
