import React from "react";
import { withRouter } from "react-router-dom";

function NestedUser(props) {
const {
    match: {
        params: { name }
    }
} = props;

return (
    <div>
        <p>Ini users dengan nama:{name}</p>
    </div>
);
}

export default withRouter(NestedUser);
