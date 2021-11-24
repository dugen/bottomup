import { Link } from "gatsby";
import * as React from "react";

export default function NavLinks(){
    return(
                <ul>
                    <Link  to="/#hero">
                        Heroes
                    </Link>
                    <Link to="/#features">
                        Features
                    </Link>
                    <Link to="/#lösungen">
                        Lösungen
                    </Link>
                    <Link to="/#preise">
                        Preise
                    </Link>
                </ul>
    );
};