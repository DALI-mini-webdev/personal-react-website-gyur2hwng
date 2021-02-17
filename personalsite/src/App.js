import { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Interest from "./components/Interest/Interest";
import axios from 'axios';
import './App.css';
import firebase from './firestore/index';
import ToDoBoard from './components/ToDoBoard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }
  
 /*  interestList = [
    {
      id: "swe",
      name: "Software Engineering"
    },
    {
      id: "pm",
      name: "Product Management"
    },
    {
      id: "perfumes",
      name: "Perfumes"
    },
    {
      id: "playlists",
      name: "Playlists"
    },
    {
      id: "netflix",
      name: "Netflix"
    },
    {
      id: "vball",
      name: "Volleyball"
    },
    {
      id: "travel",
      name: "Traveling"
    },
    {
      id: "dogs",
      name: "Dogs"
    },
    {
      id: "sleep",
      name: "Sleeping"
    }
  ]

  thumbsUpFunc = () => {
    console.log("thumbsUp clicked");
  }

  thumbsDownFunc = () => {
    console.log("thumbsDown clicked");
  }

  interestMap = this.interestList.map((interest) => {
    return(
      <ul key={interest.id}>{interest.name} <button onClick={this.thumbsUpFunc}>&#128077;</button><button onClick={this.thumbsDownFunc}>&#128078;</button></ul>
    )
    
  });

  helloVisitor = (event) => {
    <p>Hello {event.target.value}</p>
  }

  keyDownFunction = (event) => {
    if (event.key === 'Enter'){
      console.log("Enter pressed");
      return (this.helloVisitor)
    }
  } */

  fetchData = () => {
    axios.get("https://cat-fact.herokuapp.com/facts")
    .then((response) => {
      console.log(response);
      this.setState({
        data: response.data[0]
      })
    }).catch((error) => {
      console.log(error);
    })
  }

  renderCatFact = () => {
    if (this.state.data) {
      return (
        <div>
          <div>Created at: {this.state.data.createdAt}</div>
          <div>Source: {this.state.data.source}</div>
          <div>{this.state.data.text}</div>
        </div>
      )
    } else {
      return (<div>no cat facts</div>)
    }
  }

  render() {
    console.log(this.state.data);
    console.log(firebase);
    console.log(firebase.db);
    return (
      <div className="App">
         <Navbar />
         <header className="App-header">
          <h1>Hi, I'm Gyuri!</h1>
          <h2>Who are you?</h2>
          {/* <input type="text" onKeyDown={this.keyDownFunction}/> */}
         </header>
  
         <div className="App-body">
      
          <div id="intro">
            {/* Writing */}
            <h2>Sneak Peak of Me</h2>
            <h3> Dartmouth '23 &#127794;</h3><br></br>
            <p id="title">MAJOR: Computer Science <br></br>
            MINOR/MOD: ?? (Music? HCD?)  ¯\_(ツ)_/¯ <br></br>
            ON CAMPUS: WiCS exec, Dartmouth College Wind Ensemble flutist, CS10 TA <br></br>
            MY ~HISTORY~: Tokyo, Japan  &#10145;  Guangzhou, China  &#10145;  Seoul, South Korea  &#10145;  Hanover, US  &#10145;  Seoul, South Korea <br ></br>
            FUN FACT: My fingers are doublejointed!! <br></br>
            </p>
          </div>
          
  
          <div id="interests">
            <h2>Interests</h2>
            <h3>My interests are all over the place, tbh, <br></br>
            and some of them are</h3> 
            <p id="comment">click on &#128077; if it's yours too! &#128078; if you're like meh</p>
            {/* {interestMap} */}
          </div>
  
          <Interest />

          <div id="catfacts">
            <h2>Cat Facts</h2>  
            <button onClick={this.fetchData}>click me to get cat facts!</button>
            {this.renderCatFact()}
          </div>

          <h2>To Do Board</h2> 
          <ToDoBoard />
          
  
        </div>
      </div>
  
    );
  }
  

}

export default App;