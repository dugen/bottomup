import * as React from 'react';
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import GlobalStyles from '@mui/material/GlobalStyles';
import Link from '@mui/material/Link';
import Icon from "../../assets/logo.svg"
import Icon3 from "../../assets/logo3.svg"

function NavBar() {
    return (
        <React.Fragment>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <AppBar
                position="static"
                elevation={0}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
            >
                <Toolbar sx={{ flexWrap: 'wrap', alignItems:"center"}} >
                    <Link href="/#" sx={{justifyContent:"left",textDecoration: 'none' }}>
                        <Icon/>
                    </Link>
                        <Link
                            variant="button"
                            color="text.secondary"
                            href="/#features"
                            sx={{ my: 1, mx: 4 ,textDecoration: 'none', textTransform:"none" }}
                        >
                            Features
                        </Link>
                        <Link
                            variant="button"
                            color="text.secondary"
                            href="/#lösungen"
                            sx={{ my: 1, mx: 4,textDecoration: 'none', textTransform:"none"  }}
                        >
                            Lösungen
                        </Link>
                        <Link
                            variant="button"
                            color="text.secondary"
                            href="/#preise"
                            sx={{ my: 1, mx: 4,textDecoration: 'none' , textTransform:"none" }}
                        >
                            Preise
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="/#unternehmen"
                            sx={{ my: 1, mx: 4,textDecoration: 'none', textTransform:"none" }}

                        >
                            Unternehmen
                        </Link>
                    <Link href="/#" sx={{paddingTop:1}}>
                        <Icon3/>
                    </Link>
                </Toolbar>
            </AppBar>
        </React.Fragment>
);
}
export default NavBar;

