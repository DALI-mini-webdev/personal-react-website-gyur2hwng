import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <head>
        <title>Gyuri's Website</title>

        /* favicon */
        <link rel="icon" href="img/me_favicon.png" />

        /* external stylesheet import */
        <link rel="stylesheet" type="text/css" href="style.css" />
      </head>
        
      <body>
        /* menu on the top */
        <nav id="nav">
          <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="https://www.google.com">Past</a></li>
              <li><a href="https://www.google.com">Present</a></li>
              <li><a href="https://www.google.com">Future</a></li>
          </ul>
        </nav>
    
        <div id="contents">
          /* My Photo */
          <img id="mypic" src="img/me.jpg" width="360" height="480" />

          /* Writing */
          <h1>Hi, I'm Gyuri!</h1>
          <p> I'm a '23 at Dartmouth majoring in Computer Science and trying to choose between
          Music or Human Centered Design minor. On campus, I'm involved in Women in
          Computer Science as an exec and Dartmouth College Wind Ensemble as a flutist. I often 
          participate in flute projects as well, which is currently recording the Chaminade 
          Flute Concerto Op. 107. I'm also a TA for CS10 this term.<br /><br />

          I lived in Japan and China for four years each when I was little, but
          afterwards grew up in Seoul, South Korea and came to New Hampshire
          to go to Dartmouth! Currently I'm back at my home in Seoul. <br /><br />

          Fun fact about me: my fingers are doublejointed!! <br /><br />
          </p>
          

          <h2>Interests</h2>
          <p>My interest is all over the place, to be honest, and some of them are
            <ul>
              <li>Software Engineering</li>
              <li>Product Management</li>
              <li>Awesome song playlists</li>
              <li>Netflix</li>
              <li>Perfumes/Fragrances</li>
              <li>Volleyball</li>
              <li>Traveling</li>
              <li>Cuddling with my golden</li>
              <li>Sleeping</li>
            </ul>
          </p>
        </div>

      </body>
    </div>

  );
}

export default App;
