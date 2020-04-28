import React, { useContext } from 'react';

import { store } from './store';
import usePersistedState from './usePersistedState';

const Result = (props) => {
	const [state, setNumberOfEvent] = usePersistedState('numberOfEvent', '');
	// const state = useContext(store);
	console.log(state);
	return (
		<h1>result</h1>
	)
}

export default Result;