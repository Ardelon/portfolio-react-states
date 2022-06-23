import React, { useEffect, useRef } from 'react';
import Counter from './Counter';
import ListElement from './ListElement';
import { useDispatch, useSelector } from 'react-redux';
import {
	incrementArray,
	decrementArray,
	incrementInitialRenderCount,
	incrementReRenderCount,
	incerementChildrenReRenderCount,
} from './listContainerSlice';

const ListContainer = (props) => {
	const parentElement = useRef(null);
	const array = useSelector((state) => state.listContainer.array);
	const childrenInitialRenderCount = useSelector(
		(state) => state.listContainer.childrenInitialRenderCount
	);
	const reRenderCount = useSelector(
		(state) => state.listContainer.reRenderCount
	);
	const initialRenderCount = useSelector(
		(state) => state.listContainer.initialRenderCount
	);
	const childrenReRenderCount = useSelector(
		(state) => state.listContainer.childrenReRenderCount
	);

	const dispatch = useDispatch();
	const removeNumberFromArray = () => {
		dispatch(decrementArray());
	};

	const addNumberToArray = () => {
		dispatch(incrementArray());
	};

	const updateChildrenRenderCounts = () => {
		dispatch(incerementChildrenReRenderCount());
	};

	useEffect(() => {
		parentElement.current.classList.add('initial-render');
		setTimeout(() => {
			if (parentElement.current) {
				parentElement.current.classList.remove('initial-render');
			}
		}, 300);
		dispatch(incrementInitialRenderCount());
	}, []);

	useEffect(() => {
		parentElement.current.classList.add('re-render');
		setTimeout(() => {
			if (parentElement.current) {
				parentElement.current.classList.remove('re-render');
			}
		}, 300);
		dispatch(incrementReRenderCount());
	}, [array, childrenInitialRenderCount, childrenReRenderCount]);

	return (
		<div ref={parentElement} className={'list-container'}>
			<Counter
				childrenInitialRenderCount={childrenInitialRenderCount}
				reRenderCount={reRenderCount}
				initialRenderCount={initialRenderCount}
				childrenReRenderCount={childrenReRenderCount}
				name={'ListContainer'}
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
