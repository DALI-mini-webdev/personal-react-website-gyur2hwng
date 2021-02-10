import React, { Component } from 'react';
import { Map } from 'immutable';
import InterestPost from './InterestPost';
import "./Interest.css"

class Interest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            interests: Map(),
            interestID: 0,
            newInterestName: ' ',
            newInterestImage: ' ',
        };
    }

    newInterestNameFunction = (event) => {
        this.setState({ newInterestName: event.target.value });
    }

    newInterestImageFunction = (event) => {
        this.setState({ newInterestImage: event.target.value });
    }

    rec = () => {
        let interestData = {
            name: this.state.newInterestName,
            image: this.state.newInterestImage,
        }
        this.setState({
            interests: this.state.interests.set(this.state.interestID, interestData),
            interestID: this.state.interestID + 1,
        })
    }

    render() {
        const allInterests = this.state.interests.entrySeq().map(
            ([id, interest]) => {
                return (
                    <InterestPost
                    save = {this.save}
                    delete = {this.delete}
                    name = {interest.name}
                    interestURL = {interest.image}
                    id = {id}
                    key = {id}
                    />
                );
            }
        );

        return (
            <div className="Rec">
                <h2>Recommend!</h2>
                <p>Recommend a Netflix Show, a Perfume, or a Song</p>
                {allInterests}
                <p>Enter the title/name</p>
                <input type="text" value={this.state.newInterestName} onChange={this.newInterestNameFunction} />

                <p>Enter image URL of the poster/product/album:</p>
                <input type="text" value={this.state.newInterestImage} onChange={this.newInterestImageFunction} />
                <br></br>
                <button onClick={this.rec}>Recommend</button>
                
            </div>
        )
    }
}

export default Interest;