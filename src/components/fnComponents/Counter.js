import React, { useEffect, useState, useRef } from 'react';

function Counter(props) {
	// Declare a new state variable, which we'll call "count"

	return (
		<div className={'counter'}>
			<h1>{props.name}</h1>
			<p>Initial Render : {props.initialRenderCount}</p>
			<p>Re Render : {props.reRenderCount}</p>
			{props.childrenInitialRenderCount ? (
				<p>Children Initial Render : {props.childrenInitialRenderCount}</p>
			) : null}
			{props.childrenReRenderCount ? (
				<p>Children Re Render : {props.childrenReRenderCount}</p>
			) : null}
		</div>
	);
}

export default Counter;
