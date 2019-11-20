import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import GuestTabs from "./member/Tabs";
import MemberTabs from "./guest/Tabs";

function Header() {
    return (
        <Fragment>
            {JSON.parse(localStorage.getItem("isLogin")) !== true ? (
                <MemberTabs />
            ) : (
                <GuestTabs />
            )}
        </Fragment>
    );
}

export default withRouter(Header);