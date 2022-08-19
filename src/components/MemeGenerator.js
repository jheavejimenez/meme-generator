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
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});
        fetch(BASE_URL).then(r => r.json()).then(response => {
            this.setState({allMemeImages: response.data.memes})
        });
    }

    handleInputChange (e) {
       this.setState({
           [e.target.name]: e.target.value
       })

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