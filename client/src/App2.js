
import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Aside } from "./aside";
import { Header } from "./header";
import { Sidebar } from "./sidebar"
import { Abt } from "./abt";
import { Todo } from "./todo";
import { Skate } from "./skate"


class App2 extends React.Component {
    render () {
        return( <BrowserRouter>
         <div>
            
            <Header />
            <Aside />
            <div class="stuff">
            <Sidebar />
            <Switch>
                <Route path="/" exact component={Abt} />
                <Route path="/abt" component={Abt} />
                <Route path="/t" component={Todo} />
                <Route path="/s" component={Skate} />
            </Switch>
            </div>
            
        </div>
        </BrowserRouter>);
    }
}

export default App2;
