import React from 'react';

function Equation (props) {
	return (
		<div className="equation">
			<p className="text">{props.value1} + {props.value2} + {props.value3} = {props.proposedSum}</p>
		</div>
	);
 }
 
 export default Equation