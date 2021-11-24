import * as React from 'react';
import Navigation from "./Navigation";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

function NavBar() {
    return (
        <div>
            <CssBaseline />
            <AppBar
                style={{ background: '#263238' }}
                position="static"
                color="default"
                elevation={0}
            >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
            <Navigation/>
                </Toolbar>
            </AppBar>
        </div>
);
}

export default NavBar;

