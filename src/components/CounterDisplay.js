import React, { useEffect, useRef, useState } from "react";
import Counter from "./fnComponents/Counter";
import ListContainer from "./fnComponents/ListContainer";
import {default as CounterComp} from './classComponents/Counter';
import {default as ListContainerComp} from './classComponents/ListContainer';
import {default as ListElementComp} from './classComponents/ListElement';


const CounterDisplay = () => {

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

        <Counter
            initialRenderCount={initialRenderCount}
            reRenderCount={reRenderCount}
            name={'App'}
        />
        
        <ListContainerComp />
        <ListContainer />
    </div>
    )

}

export default CounterDisplay