import React from "react"


export class Sidebar extends React.Component {
    render () {
        return ( <div>
            <div id="sb">
    <div className="box">
        <h3>hey</h3>
        <p>jmin, 16, thinking abt dumb stuff eternally. hyperfixating over obsure things. trying to not fail chemistry?</p>
    </div>
    
    
    <div className="box sm">
    <h3>social</h3>
    <a href="mailto:lutzedge@gmail.com"title="email"><i className="far fa-envelope"></i></a>
    <a href="http://instagram.com/wngjmn"title="instagram"><i className="fab fa-instagram"></i></a>
    <a href="https://open.spotify.com/user/wngjmn/playlist/2KPuFawykBLN5Gt9RIRXzq"title="playlist"><i className="fab fa-spotify"></i></a>
    <a href="http://github.com/salchows"title="github"><i className="fab fa-github"></i></a>
    </div>
    
    <div className="box"><p>this is the king of figure skating yuzuru hanyu I would die for him. amen</p>
    <img src="https://78.media.tumblr.com/3d1542dd54ef244071621e47c5a57acf/tumblr_pc7vyqMG8A1x6peyxo1_500.gif"alt="yuzu"/>
    
    </div>

</div></div>
        );
    }
}