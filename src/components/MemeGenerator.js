import React from "react";
import {BASE_URL} from "../constants/ApiUrl";

class MemeGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "",
            isLoading: false
        }
    }
    componentDidMount() {
        this.setState({isLoading: true});
        fetch(BASE_URL).then(r => r.json()).then(response => {
            console.log(response.data.memes);
        });
    }

    render() {
        return (
            <div>meme generator</div>
        );
    }
}

export default MemeGenerator