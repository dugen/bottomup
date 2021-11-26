import * as React from "react";
import Link from '@mui/material/Link';
import {Toolbar} from "@mui/material";

import Icon3 from "../assets/logo3.svg"

const Footer = class extends React.Component {
    render() {
        return (
            <Toolbar sx={{backgroundColor: "goldenrod", justifyContent: "center"}}>

                <Link href="/#" position="absolute" left={0}>
                    <Icon3 width="80px" />
                </Link>
                <Link sx={{ mx: 1, textDecoration: 'none', textTransform: "none"}} href="/#">
                    Home
                </Link>

                <h3>|</h3>
                <Link sx={{ mx: 1, textDecoration: 'none', textTransform: "none"}} href="/#features">
                    Features
                </Link>

                <h3>|</h3>
                <Link sx={{ mx: 1, textDecoration: 'none', textTransform: "none"}} href="/#lösungen">
                    Lösungen
                </Link>

                <h3>|</h3>
                <Link sx={{ mx: 1, textDecoration: 'none', textTransform: "none"}} href="/#preise">
                    Preise
                </Link>

                <h3>|</h3>
                <Link sx={{ mx: 1, textDecoration: 'none', textTransform: "none"}} href="/#unternehmen">
                    Unternehmen
                </Link>
            </Toolbar>
        )
            ;
    }
};

export default Footer;
