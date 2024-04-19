import { Link, Route } from 'wouter';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Details from './pages/Details';
import { GifsContextProvider } from './contexts/GifsContext';
import Logo from './assets/logo.png';
import './App.css'

export default function App() {
  return (
    <>
      <div className='App'>
        <section className='App-content'>
          <Link to='/'>
            <figure className="App-logo">
              <img alt='Giffy logo' src={Logo} />
            </figure>
          </Link>

          <GifsContextProvider>
            <Route
              component={Home}
              path='/' />
            <Route
              component={SearchResults}
              path='/search/:keyword' />
            <Route
              component={Details}
              path='/gif/:id' />
          </GifsContextProvider>
        </section>
      </div>
    </>
  )
}