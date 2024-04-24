
import { Route, Switch } from 'react-router-dom'
import './App.css'
import PageContent from './components/HomePage/PageContent'

function App() {
  

  return (
    <>
    <Switch>
      <Route path="/">
      <PageContent/>
      </Route>
      </Switch>
    </>
  )
}

export default App
