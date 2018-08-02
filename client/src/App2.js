
import React from "react"

import { Header } from "./header";
import { Abt } from "./abt";
import { Todo } from "./todo";


class App2 extends React.Component {
    render () {
        return <div>
            <Header />
            <Abt title ="WHATSUP"/>
            <Todo />
        </div>
    }
}

export default App2;
