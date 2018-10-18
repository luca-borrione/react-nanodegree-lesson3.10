import React from 'react';

function Buttons (props) {
	return (
		<div>
			<button onClick={() => props.clicked(true)}>True</button>
			<button onClick={() => props.clicked(false)}>False</button>
		</div>
	);
 }
 
 export default Buttons