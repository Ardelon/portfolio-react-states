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
            array :  [...state.array, state.array.length + 1]
        }));
	};

    removeNumberFromArray = () => {
        this.state.array.pop();
        this.setState((state) => ({
            array : [...state.array]
        }))
    }

    updateChildrenRenderCounts = () => {
        console.log('selam');
    }

	render() {
		return (
			<div ref={this.parentElement} className={'list-container'}>
				<Counter
					childrenInitialRenderCount={this.state.childrenInitialRenderCount}
					reRenderCount={this.statereRenderCount}
					initialRenderCount={this.stateinitialRenderCount}
					childrenReRenderCount={this.statechildrenReRenderCount}
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
