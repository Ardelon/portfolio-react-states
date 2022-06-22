import React from 'react';

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            name : props.name,
			initialRenderCount: props.initialRenderCount,
			reRenderCount: props.reRenderCount,
			childrenInitialRenderCount: props.childrenInitialRenderCount,
			childrenReRenderCount: props.childrenReRenderCount,
		};
	}

	a = () => {};
	render() {
		return (
			<div className={'counter'}>
				<h1>{this.state.name}</h1>
				<p>Initial Render : {this.state.initialRenderCount}</p>
				<p>Re Render : {this.state.reRenderCount}</p>
				{this.state.childrenInitialRenderCount ? (
					<p>Children Initial Render : {this.state.childrenInitialRenderCount}</p>
				) : null}
				{this.state.childrenReRenderCount ? (
					<p>Children Re Render : {this.state.childrenReRenderCount}</p>
				) : null}
			</div>
		);
	}
}

export default Counter;
