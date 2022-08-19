import React from "react";

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
    }

    render() {
        return (
            <div>meme generator</div>
        )


    }
}

export default MemeGenerator