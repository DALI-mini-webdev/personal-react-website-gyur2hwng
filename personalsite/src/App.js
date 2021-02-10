import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Interest from "./components/Interest/Interest";
import './App.css';

function App() {
  /*interest variables*/
  const interestList = [
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

  const thumbsUpFunc = () => {
    console.log("thumbsUp clicked");
  }

  const thumbsDownFunc = () => {
    console.log("thumbsDown clicked");
  }

  const interestMap = interestList.map((interest) => {
    return(
      <ul key={interest.id}>{interest.name} <button onClick={thumbsUpFunc}>&#128077;</button><button onClick={thumbsDownFunc}>&#128078;</button></ul>
    )
    
  });

  const helloVisitor = (event) => {
    <p>Hello {event.target.value}</p>
  }

  const keyDownFunction = (event) => {
    if (event.key === 'Enter'){
      console.log("Enter pressed");
      return (helloVisitor)
    }
  }

  return (
    <div className="App">
       <Navbar />
       <header className="App-header">
        <h1>Hi, I'm Gyuri!</h1>
        <h2>Who are you?</h2>
        <input type="text" onKeyDown={keyDownFunction}/>
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
          {interestMap} 
        </div>

        <Interest />

      </div>
    </div>

  );

}

export default App;