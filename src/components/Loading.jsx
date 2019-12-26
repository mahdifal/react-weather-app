import React, { Component } from 'react'
import ReactLoading from "react-loading";

export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            done: undefined
        }
    }
    render() {
        return (
            <div className="row offset-md-5" style={{ marginTop: '15rem' }}>
                {!this.state.done ? (
                    <ReactLoading type={"bars"} color={"red"} />
                ) : (
                        <h1>hello world</h1>
                    )}
            </div>
        )
    }
}
