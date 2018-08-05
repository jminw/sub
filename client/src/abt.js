import React from "react"

export class Abt extends React.Component {
    state = {
        imageSrc: "",
    }
    
    async componentDidMount () {
            const response = await fetch("/")
            const imageBlob = await response.blob();
            const imageSrc = window.URL.createObjectURL(imageBlob);
            
            //dab
            this.setState ({imageSrc})
        };
    render () {
        
        if (!this.state.imageSrc) {
            return <p>wait for it</p>
        }

        return ( <div class="content">
            
                <h1>About</h1>
                
                <p>hi my name is jmin!!! i'm 16 and i'm probably crying a lot</p>
                <p>i don't have much to talk about myself except my super weird and ever changing interests. right now i'm crying over figure skating i don't even know how i started liking to watch figure skating. i'm gonna be randomly including pictures of my favourite skaters through this mess</p>
                <p>here's some fun facts about me</p>
                <ul>
                    <li>i was such an irritatingly hyperactive fetus in my mother&apos;s womb i flipped around too much and my umbilical cord went three (3) times around my neck and i nearly died before i was even born. Cool</li>
                    <li>i have a younger sister but don&apos;t talk to me about her she doesn&apos;t exist to me</li>
                    <li>i once shaved my head for hair for hope. one day I had the impulse and i told everyone about it and when i regretted it later on it was too late i had already screamed to all my friends like i&apos;m gonna shave all my f---ing hair off!!!!! and I. well i had to do it. i had ugly hair for TWO YEARS</li>
                    <li>i love watching skating so much i may as well make another page of my favourite skaters and their best programs</li>
                </ul>
        
                <p>i'm an aquarius sun cancer moon and taurus rising. i have too many aquariuses in my birth chart i may as well be one of those weird artists doing dumb shit to prove a point politically like that russian guy who nailed his balls to the ground of the red square in protest of the russian government or something. god</p>
                <p>i actually started coding when i was 14 because i ran a tumblr blog. i was in a fandom that's too embarrassing to name, and i needed my blog to be a certain ~aesthetic~ that other thememakes couldn't give me. i toyed around w html and css and use a tiny bit of jquery to do cool shit. anyways now i'm here trying to code a site about myself and the things i want to do</p>
                <p>i think this project bootcamp thing is super cool because i get to learn how to code for real and </p>
                {/* <img src={this.state.imageSrc} alt="thing" /> */}
            </div>
        )
    }
}