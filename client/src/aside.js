import React from "react";
// import {Link} from "react-router-dom";

export class Aside extends React.Component {
    render() {
        return ( 
            <aside>
            <a class="t"href="/">hello</a>
   
            <nav>
                <a href="/abt">abt</a>
                <a href="/t">to do</a>
                <a href="/s">favourite</a>
            </nav>

            </aside>
        )
    }
}
