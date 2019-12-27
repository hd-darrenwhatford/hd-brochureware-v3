import React from 'react'

// Global styles
import './scss/global/_button.scss'
import './scss/global/_type.scss'

// Component styles
import './scss/atoms/_btn.scss'
import './scss/atoms/_link.scss'

const Button = ({ type = 'button', url = '', children }) => {

	const isAnchor = url && (url.includes('http') || url.startsWith('#') || url.startsWith('mailto') || url.startsWith('/'))
	
	const renderAnchor = () =>
		<a className="link" href={url}>{children}</a>
	
	const renderButton = () =>
		<button className="btn" type={type}>{children}</button>
	
	return (
		isAnchor ? renderAnchor() : renderButton()
	)
}

export default Button
