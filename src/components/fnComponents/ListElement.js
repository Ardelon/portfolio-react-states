import React, { useEffect, useRef, useState } from "react";
import Counter from "./Counter";

const ListElement = (props) => {

    const parentElement = useRef(null);
    const {updateChildrenRenderCounts} = props
    const [initialRenderCount, setInitialRenderCount] = useState(0);
	const [reRenderCount, setReRenderCount] = useState(0);
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        parentElement.current.classList.add('initial-render');
		setTimeout(() => {
			if (parentElement.current) {
				parentElement.current.classList.remove('initial-render');
			}
		}, 300);
        setInitialRenderCount(initialRenderCount+1);
        updateChildrenRenderCounts('initialRender')
    }, [])

    useEffect(() => {
        parentElement.current.classList.add('re-render');
		setTimeout(() => {
			if (parentElement.current) {
				parentElement.current.classList.remove('re-render');
			}
		}, 300);

        updateChildrenRenderCounts('reRender')
        setReRenderCount(reRenderCount+1)
    }, [ counter])

    const addOneToCounter = () => {
        setCounter(counter+1)
        
    }

    const removeOneFromCounter = () => {
        setCounter(counter-1)
    }

    return (
        <div ref={parentElement} className={'list-element'}>
            <Counter initialRenderCount={initialRenderCount} reRenderCount={reRenderCount} />
            <button onClick={props.addNumberToArray}>Add List Element</button>
            <button onClick={props.removeNumberFromArray}>Remove List Element</button>
            <button onClick={addOneToCounter}>Add One To Counter</button>
            <button onClick={removeOneFromCounter}>Remove One From Counter</button>
        </div>
    )
}

export default ListElement