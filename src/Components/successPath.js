import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useLocation} from "react-router-dom";

const ErrorPath = () => {
    const query = new URLSearchParams(useLocation().search);
    const msg = query.get("msg");
    return (
        <Grid item>
            <h1 style={{textAlign: "center", color: "#00e676"}}>Success!</h1>
            <h4>Please allow some time for the team to review your appeal and check the email used for your Discord account for a response from community@zksync.io. Abusing this system will result in a perma-ban.</h4>
        </Grid>
    )
}

export default ErrorPath;
