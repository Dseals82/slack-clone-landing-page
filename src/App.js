import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    <nav id="nav" className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a id="nav-logo" className="navbar-brand" href="#"><i class="fab fa-slack-hash"></i> Slack</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Product <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Support</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Create a new team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Find your team</a>
            </li>
            <button type="button" class="btn btn-lg btn-outline-secondary">Sign in</button>
          </ul>
        </div>
        </div>
      </nav>
      <div className="container">
        <h1 id="h1-main">A messaging app for teams<br/> who see through the Earth</h1>
        <p id="p-main">
          The IceCube Collaboration is one of tens of thousands of teams around
          the world using<br/> Slace to make their working lives simpler, more pleasent,
          and more productive
        </p>
        <div id="card" className="container card bg-dark text-white">
          <div class="row">
           <div class="col">
             <button type="button" id="button1" class="btn btn-success btn-lg">Join existing team</button>
           </div>
           <div class="col">
             <button type="button" id="button2" class="btn btn-info btn-lg">  Start a new team</button>
           </div>
          </div>
          <h5 id="card-text">Already joined a Slack team? Sign in</h5>
        </div>
      </div>
    </div>
  );
}

export default App;
