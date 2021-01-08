import React from 'react'
import ReactDOM from 'react-dom'
import { resetContext, getContext } from 'kea'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import 'antd/dist/antd.css'

resetContext({
	createStore: {},
	plugins: []
})

ReactDOM.render(
	<Provider store={getContext().store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
