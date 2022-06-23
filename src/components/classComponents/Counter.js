import React from 'react';

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name : props.name,
		};
	}
	
	render() {
		return (
			<div className={'counter'}>
				<h1>{this.state.name}</h1>
				<p>Initial Render : {this.props.initialRenderCount}</p>
				<p>Re Render : {this.props.reRenderCount}</p>
				{this.props.childrenInitialRenderCount ? (
					<p>Children Initial Render : {this.props.childrenInitialRenderCount}</p>
				) : null}
				{this.props.childrenReRenderCount ? (
					<p>Children Re Render : {this.props.childrenReRenderCount}</p>
				) : null}
			</div>
		);
	}
}

export default Counter;
