import './App.css';
import Movie from './components/movie.js'

function App() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Andre van de Ven</h1>
        <h2>UPenn 2026</h2>
      </div>
      <div className="info-container">
        <div className="top-pics">
          <img src="andre-diving.jpeg" alt="andre"/>
        </div>
        <div className="top-pics">
          <img src="IMG_4760.jpg" alt="andre1"/>
        </div>
        <div className="personalInfo">
          <div class="infoText">
            <p><b>Hi! I'm a freshman at Penn studying neuroscience.</b></p>
            <p>My hobbies include:</p>
            <ul>
              <li>Scuba diving</li>
              <li>Underwater photography</li>
              <li>Reading</li>
              <li>Playing video games</li>
            </ul>
          </div>
          <div className="bottom-pic">
            <img src="IMG_9216.jpeg" alt="andre-and-ana"/>
          </div>
        </div>
        <div className="fav-movies">
          <div className="movies-heading"><p><b>These are my favorite movies!</b></p></div>
          <Movie movieName="Interstellar" picture="interstellar.jpeg"/> 
          <Movie movieName="The Grand Budapest Hotel" picture="grandBudapest.jpg"/> 
          <Movie movieName="The Dark Knight" picture="darkKnight.jpg"/> 
          <Movie movieName="Pulp Fiction" picture="pulpFiction.jpg"/> 
        </div>
      </div>
      <div className="links">
        <a href="https://www.andrevandeven.us/">Photography Website</a>
        &nbsp;
        <a href="https://github.com/andrevandeven">GitHub</a>
      </div>
    </div>
  );
}

export default App;
