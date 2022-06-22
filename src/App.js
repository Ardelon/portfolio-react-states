import { useEffect, useRef, useState } from 'react';
import Counter from './components/fnComponents/Counter';
import { default as CounterComp } from './components/classComponents/Counter';
import ListContainer from './components/fnComponents/ListContainer';
import {default as ListContainerComp} from './components/classComponents/ListContainer'

function App(props) {
	const parentElement = useRef(null);
	const [initialRenderCount, setInitialRenderCount] = useState(0);
	const [reRenderCount, setReRenderCount] = useState(0);

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
	}, [initialRenderCount]);

	return (
		<div ref={parentElement} className="App">
			<CounterComp
				initialRenderCount={initialRenderCount}
				reRenderCount={reRenderCount}
				name={'App'}
			/>

			{/* <Counter
				initialRenderCount={initialRenderCount}
				reRenderCount={reRenderCount}
				name={'App'}
			/> */}
			
			<ListContainerComp />
		</div>
	);
}

export default App;
