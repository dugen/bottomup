import * as React from "react";
import NavLinks from "./NavLinks";

import classes from "./nav.module.css"

const Navigation =() =>{
    return(
        <nav className={classes.Navigation}>
            <NavLinks/>
        </nav>
    );
}
export default Navigation;