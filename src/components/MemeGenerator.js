import React from "react";
import {BASE_URL, RANDOM_IMG_URL} from "../constants/ApiUrl";

class MemeGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: RANDOM_IMG_URL,
            allMemeImages: [],
            isLoading: true
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: false});
        fetch(BASE_URL).then(r => r.json()).then(response => {
            this.setState({allMemeImages: response.data.memes})
        });
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleSubmit(e) {
        e.preventDefault();
        const randomImage = this.state.allMemeImages[Math.floor(Math.random() * this.state.allMemeImages.length)];
        this.setState({
            randomImage: randomImage.url,
        })
    }
    render() {
        const isLoading = this.state.isLoading;

        return (
            <div>
                {isLoading
                    ? <div>loading...</div>
                    : <div>
                        <form className={"meme-form"} onSubmit={this.handleSubmit}>
                            <input
                                type={"text"}
                                name={"topText"}
                                placeholder={"Top Text"}
                                value={this.state.topText}
                                onChange={this.handleInputChange}
                            />
                            <input
                                type={"text"}
                                name={"bottomText"}
                                placeholder={"Bottom Text"}
                                value={this.state.bottomText}
                                onChange={this.handleInputChange}
                            />
                            <button>Generate</button>
                        </form>

                        <div className="meme">
                            <img src={this.state.randomImage} alt=""/>
                            <h2 className="top">{this.state.topText}</h2>
                            <h2 className="bottom">{this.state.bottomText}</h2>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default MemeGenerator