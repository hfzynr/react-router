import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import Axios from 'axios';

const API_PLACEHOLDER = process.env.REACT_APP_API_PLACEHOLDER
export class NestedUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount = () => {
        const {
            match: {
                params: { userId }
            }
            } = this.props;
        Axios
        .get(`${API_PLACEHOLDER}/posts`)
        .then(res => {
                let userPosted = res.data.filter(
                    item => {
                return item.userId  === userId;
            });
            this.setState({ data: userPosted });
            })
            .catch(error => {
            console.log(error);
            });
        };


    render() {
        return (
            this.state.data.map((item, key) => {
                return (
                    <div>
                        <p>Ini users dengan nama:</p>
                    </div>
        );
    })
  );
}
}

export default withRouter(NestedUser);


// import React from 'react'

// export default function NestedUser() {
//     return (
//         <div>
//             <h1>this from nedted</h1>
//         </div>
//     )
// }
