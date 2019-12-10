import React from 'react'

import Button from './Button'

const App = () => {
	return (
		<React.Fragment>
			<Button theme="primary">Car</Button>
			<Button theme="secondary" isFullWidth>Home</Button>
			<Button url="https://www.hastingsdirect.com">Van</Button>
		</React.Fragment>
    )
}

export default App
