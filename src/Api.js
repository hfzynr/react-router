import React, { Component } from 'react'

export default class Api extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data: []
        }

    }
    
    componentDidMount = () => {
        fetch("https://api.github.com/users/hfzynr")
        .then(response => {
            return response.json()
        })
        .then(data => {
            this.setState({data: data})
        })
    }

    render() {
        return (
            <div>
                <p>my name is {this.state.data.name}</p>
            </div>
        )
    }
}
