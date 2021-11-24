import * as React from "react";
import NavLinks from "./NavLinks";
import classes from "./nav.module.css"
import {CgMenuRound} from "react-icons/cg"
import {CgCloseO} from "react-icons/cg";
import {useState} from "react";

const MobileNavigation =() =>{

    const [open, setOpen]=useState(false);

    const hamburgerIcon=<CgMenuRound
        className={classes.Hamburger}
        size="40px" color="white"
        onClick={()=> setOpen(!open)}
    />

    const closeIcon=<CgCloseO
        className={classes.Hamburger}
        size="40px" color="white"
        onClick={()=> setOpen(!open)}
    />

    return(
        <nav className={classes.MobileNavigation}>
            {open? closeIcon: hamburgerIcon}
            {open&&<NavLinks/>}
        </nav>
);

}
export default MobileNavigation;