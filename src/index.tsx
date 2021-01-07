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
	<React.StrictMode>
		<Provider store={getContext().store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
