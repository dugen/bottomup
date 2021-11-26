import * as React from 'react';
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Link from '@mui/material/Link';
import Icon from "../../assets/logo.svg"

function NavBar() {
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                position="static"
                elevation={0}
                sx={{ backgroundColor:"goldenrod" }}
            >
                <Toolbar sx={{ flexWrap: 'wrap', justifyContent: "center"}} >
                    <Link href="/#" sx={{mx: 4,justifyContent:"left",textDecoration: 'none' }}>
                        <Icon/>
                    </Link>
                        <Link
                            color="text.secondary"
                            href="/#features"
                            sx={{ my: 1, mx: 4 ,textDecoration: 'none', textTransform:"none" }}
                        >
                            Features
                        </Link>
                        <Link
                            color="text.secondary"
                            href="/#lösungen"
                            sx={{ my: 1, mx: 4,textDecoration: 'none', textTransform:"none"  }}
                        >
                            Lösungen
                        </Link>
                        <Link
                            color="text.secondary"
                            href="/#preise"
                            sx={{ my: 1, mx: 4,textDecoration: 'none' , textTransform:"none" }}
                        >
                            Preise
                        </Link>
                        <Link
                            color="text.secondary"
                            href="/#unternehmen"
                            sx={{ my: 1, mx: 4,textDecoration: 'none', textTransform:"none" }}

                        >
                            Unternehmen
                        </Link>
                </Toolbar>
            </AppBar>
        </React.Fragment>
);
}
export default NavBar;

