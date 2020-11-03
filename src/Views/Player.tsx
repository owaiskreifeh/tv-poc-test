import React from 'react';
import { RouteComponentProps } from 'react-router-dom'

class Player extends React.Component<RouteComponentProps> {
    state = {

    }
    render() {
        console.log(this.props.match.params)
        return <section id="view-player">
            <h1>
                Player
            </h1>
        </section>
    }
}

export default (Player);