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
            isLoading: false
        }
    }
    componentDidMount() {
        this.setState({isLoading: true});
        fetch(BASE_URL).then(r => r.json()).then(response => {
            this.setState({allMemeImages: response.data.memes})
        });
    }

    render() {
        return (
            <div>
                <form className={"meme-form"}>
                    <input
                        type={"text"}
                        name={"topText"}
                        placeholder={"Top Text"}
                        value={ this.state.topText}

                    />
                    <input
                        type={"text"}
                        name={"bottomText"}
                        placeholder={"Bottom Text"}
                        value={ this.state.bottomText}

                    />
                    <button>Generate</button>
                </form>
            </div>
        );
    }
}

export default MemeGenerator