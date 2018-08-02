import React from "react"

export class Abt extends React.Component {
    state = {
        imageSrc: "",
    }
    
    async componentDidMount () {
            const response = await fetch("https://cataas.com/cat")
            const imageBlob = await response.blob();
            const imageSrc = window.URL.createObjectURL(imageBlob);
            
            //dab
            this.setState ({imageSrc})
        };
    render () {
        
        if (!this.state.imageSrc) {
            return <p>Loadin'...</p>
        }

        return (
            <div>
                <h1>{this.props.title}</h1>
                <img src={this.state.imageSrc} alt="thing" />
                    <p>Hello</p> 
                </div>
        )
    }
}