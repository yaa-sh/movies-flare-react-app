import './App.css';
import Header from './Components/Header'
import Movies from './Components/Movies'
import moviesData from './movies.json'

function App() {
  return (
    <div className='App'>
      <Header/>
      <div className="main">
        {
          moviesData.map((Element, index) => {
            return(
              <Movies
              key = {index}
              Title = {Element.Title}
              Year = {Element.Year}
              Img = {Element.Poster}
              />
              
            )
          })
        }
      </div>
    </div>
    
  );
}

export default App;
