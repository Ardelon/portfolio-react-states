import React from 'react';
import Counter from './Counter';
class ListElement extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			initialRenderCount: 0,
			reRenderCount: 0,
			counter: 0,
		};
		this.parentElement = React.createRef(null);
	}

	addOneToCounter = () => {
		this.setState((state) => ({
			counter: state.counter + 1,
			reRenderCount : state.reRenderCount +1
		}));
	};

	removeOneFromCounter = () => {
		this.setState((state) => ({
			counter: state.counter - 1,
			reRenderCount : state.reRenderCount +1
		}));
	};

	componentDidMount() {
		this.parentElement.current.classList.add('initial-render');
		setTimeout(() => {
			if (this.parentElement.current) {
				this.parentElement.current.classList.remove('initial-render');
			}
		}, 300);
		this.setState((state) => ({
			initialRenderCount: state.initialRenderCount + 1,
		}));
	}

	componentDidUpdate() {
		this.parentElement.current.classList.add('re-render');
		setTimeout(() => {
			if (this.parentElement.current) {
				this.parentElement.current.classList.remove('re-render');
			}
		}, 300);
	}

	render() {
		return (
			<div ref={this.parentElement} className={'list-element'}>
				<Counter
					initialRenderCount={this.state.initialRenderCount}
					reRenderCount={this.state.reRenderCount}
					name={'Class ListElement'}
				/>
				<button onClick={this.props.addNumberToArray}>Add List Element</button>
				<button onClick={this.props.removeNumberFromArray}>
					Remove List Element
				</button>
				<button onClick={this.addOneToCounter}>Add One To Counter</button>
				<button onClick={this.removeOneFromCounter}>
					Remove One From Counter
				</button>
			</div>
		);
	}
}

export default ListElement;
