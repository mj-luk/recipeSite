import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Recipes from './Recipes/Recipes';
import RecipeSite from './RecipeSite/RecipeSite';
import About from './About/About';
import './App.css';
import logo from './Icons/breakfast.png';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      tagss: [],
    };

  }

  componentDidMount() {
    fetch('https://api.airtable.com/v0/app0iqjLcfjGQqFxJ/Table%201?api_key=key6KjBUCAbA6ZOuy')
    .then((resp) => resp.json())
    .then(data => {
      console.log(data);
      this.setState({ recipes: data.records });
    }).catch(err => {
      // Error
    });
    fetch('https://api.airtable.com/v0/app0iqjLcfjGQqFxJ/Tags?api_key=key6KjBUCAbA6ZOuy')
    .then((resp) => resp.json())
    .then(data => {
      console.log(data);
      this.setState({ tagss: data.records });
    }).catch(err => {
      // Error
    });

  }



  render() {
    return (
      <Router>
      <div className="app">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/"> 
          <img className="logo"src={logo} alt="" /> <div className="brandname">MyRecipes</div>  </a>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="/about">About</a>
            {/* {console.log(this.state.recipes[2].fields)} */}
          </div>
        </div>
      </nav>
          <Switch>
              <Route path='/about' component={About} />
              <Route exact path='/recipe/:id' render={(props) => <RecipeSite  {...this.state.recipes[props.match.params.id]} />} />
              <Route  path='/' component={() => <Recipes recipes={this.state.recipes} tagss={this.state.tagss}/>} />
          </Switch>
                     {/* //przekazanie danych do childa */}
      {/* <Receipes recipes={this.state.recipes} tagss={this.state.tagss}/> */}
      </div>
      </Router>
    );
  }
}


export default App;
