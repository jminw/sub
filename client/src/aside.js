import React from "react";
// import {Link} from "react-router-dom";

export class Aside extends React.Component {
    render() {
        return ( 
            <aside>
            <a id="t"href="/">l'idiot</a>
   
            <nav>
                <a href="/">refresh</a>
                <a href="/abt">about</a>
                <a href="/t">to do</a>

            </nav>

            </aside>
        )
    }
}

