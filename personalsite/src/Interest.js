import React, {Component} from 'react';

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

const interestMap = interestList.map((interest) => {
    return(
      <ul key={interest.id}>{interest.name} <button onClick={thumbsUpFunc}>&#128077;</button><button onClick={thumbsDownFunc}>&#128078;</button></ul>
    )
    
  });

class Dog extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <p></p>
        )
    }
}

export default Dog;