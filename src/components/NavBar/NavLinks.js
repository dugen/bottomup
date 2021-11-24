import Link from "@mui/material/Link";
import * as React from "react";

export default function NavLinks(){
    return(
                <ul>
                    <Link className="navbar-item" to="/#heroes">
                        Heroes
                    </Link>
                    <Link className="navbar-item" to="/#features">
                        Features
                    </Link>
                    <Link className="navbar-item" to="/#lösungen">
                        Lösungen
                    </Link>
                    <Link className="navbar-item" to="/#preise">
                        Preise
                    </Link>
                </ul>
    );
};