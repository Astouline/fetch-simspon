import React, { Component } from 'react';
import './App.css';
import  GenerateSimpson  from  './GenerateSimpson';
import Figure from './Figure';



const  sampleQuotes =[
  {
   quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
   character: "Nelson Muntz",
   image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
   characterDirection : "Left"
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: sampleQuotes
    };
  }
  quotes() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=10")
      .then(response  =>  response.json())
      .then(data  => {
        this.setState({
          quote:  data[0],
        });
    });
  }
  render() {
    return (
      <div>
        <header>
        <GenerateSimpson selectQuote={() =>  this.quotes()}  />
        <Figure quote={this.state.quote} />
               
        </header>
      </div>
    );
  }
}

export default App; 
