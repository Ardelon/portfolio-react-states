import React, { useEffect, useRef, useState } from 'react';
import Counter from './Counter';
import ListElement from './ListElement';

const ListContainer = (props) => {
	const [array, setArray] = useState([1, 2, 3, 4, 5]);
	const [initialRenderCount, setInitialRenderCount] = useState(0);
	const [reRenderCount, setReRenderCount] = useState(0);
	const [childrenInitialRenderCount, setChildrenInitialRenderCount] =
		useState(0);
	const [childrenReRenderCount, setChildrenReRenderCount] = useState(0);
	const parentElement = useRef(null);
	const addNumberToArray = () => {
		setArray((array) => [...array, array.length + 1]);
	};

	const removeNumberFromArray = () => {
		array.pop();
		setArray([...array]);
	};

	const updateChildrenRenderCounts = (type = 'reRender') => {
		if (type === 'reRender') {
			setChildrenReRenderCount(childrenReRenderCount + 1);
		} else {
			setChildrenInitialRenderCount(childrenInitialRenderCount + 1);
		}
	};

	useEffect(() => {
		parentElement.current.classList.add('initial-render');
		setTimeout(() => {
			if (parentElement.current) {
				parentElement.current.classList.remove('initial-render');
			}
		}, 300);
		setInitialRenderCount(initialRenderCount + 1);
	}, []);

	useEffect(() => {
		parentElement.current.classList.add('re-render');
		setTimeout(() => {
			if (parentElement.current) {
				parentElement.current.classList.remove('re-render');
			}
		}, 300);
		setReRenderCount(reRenderCount + 1);
	}, [array, childrenInitialRenderCount, childrenReRenderCount]);

	return (
		<div ref={parentElement} className={'list-container'}>
			<Counter
				childrenInitialRenderCount={childrenInitialRenderCount}
				reRenderCount={reRenderCount}
				initialRenderCount={initialRenderCount}
				childrenReRenderCount={childrenReRenderCount}
				name={'Fn ListContainer'}
			/>
			{array.map((item) => {
				return (
					<ListElement
						key={`list-element-${item}`}
						name={`list-element-${item}`}
						addNumberToArray={addNumberToArray}
						removeNumberFromArray={removeNumberFromArray}
						updateChildrenRenderCounts={updateChildrenRenderCounts}
					/>
				);
			})}
		</div>
	);
};

export default ListContainer;
