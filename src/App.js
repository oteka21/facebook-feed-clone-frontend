
import React from 'react'
import Home from './Containers/home'
import { hot } from 'react-hot-loader/root'

class App extends React.Component {
  render () {
    return <Home />
  }
}

export default hot(App)
