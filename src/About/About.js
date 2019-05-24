import React, { Component } from 'react';

class About extends Component {
  
    render() {
      return (
        <div class="card">
          <h5 class="card-header">About</h5>
          <div class="card-body">
            <h5 class="card-title">Recipes finder</h5>
            <p class="card-text">~Made by Maciej Łukasiewicz</p>
            <a href="/home" class="btn btn-primary">Have fun</a>
          </div>
          <div>Icons made by <a href="https://www.flaticon.com/authors/photo3idea-studio" title="photo3idea_studio">photo3idea_studio</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 		    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
        </div>
      );
    }
  }
  export default About;