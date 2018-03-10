import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import 'semantic-ui-css/semantic.min.css'
import Index from './views'


const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('root'),
    )
}

render(Index)

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./views', () => {
        render(Index)
    })
}
