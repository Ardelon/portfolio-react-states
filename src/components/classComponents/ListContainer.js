import React from 'react';
import Counter from './Counter';
import ListElement from './ListElement';
class ListContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			array: [1, 2, 3, 4, 5],
			initialRenderCount: 0,
			reRenderCount: 0,
			childrenInitialRenderCount: 0,
			childrenReRenderCount: 0,
		};
        this.parentElement = React.createRef(null)
	}

	addNumberToArray = () => {
		this.setState((state) => ({
            array :  [...state.array, state.array.length + 1],
			reRenderCount : state.reRenderCount +1
        }));
	};

    removeNumberFromArray = () => {
        this.state.array.pop();
        this.setState((state) => ({
            array : [...state.array],
			reRenderCount : state.reRenderCount +1
        }))
    }

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
			<div ref={this.parentElement} className={'list-container'}>
				<Counter
					childrenInitialRenderCount={this.state.childrenInitialRenderCount}
					reRenderCount={this.state.reRenderCount}
					initialRenderCount={this.state.initialRenderCount}
					childrenReRenderCount={this.state.childrenReRenderCount}
					name={'ListContainer'}
				/>
				{this.state.array.map((item) => {
					return (
						<ListElement
							key={`list-element-${item}`}
							name={`list-element-${item}`}
							addNumberToArray={this.addNumberToArray}
							removeNumberFromArray={this.removeNumberFromArray}
							updateChildrenRenderCounts={this.updateChildrenRenderCounts}
						/>
					);
				})}
			</div>
		);
	}
}

export default ListContainer;
