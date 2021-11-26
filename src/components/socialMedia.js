import * as React from "react";
import Link from '@mui/material/Link';

import Facebook from "../assets/social/facebook.svg";
import Instagram from "../assets/social/instagram.svg";
import Twitter from "../assets/social/twitter.svg";
import Vimeo from "../assets/social/vimeo.svg";
import Github from "../assets/social/github.svg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function SocialMedia() {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Card sx={{minWidth: 870, padding: 5, maxWidth: 870}}>
                <Typography style={{display: 'flex', justifyContent: 'left', alignItems: 'left'}} variant="h3"
                            component="div">
                    Social Media Section
                </Typography>
                <CardContent>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: "17vh", paddingTop:7}}>
                        <Link href="https://facebook.com" sx={{my: 1, mx: 6}}>
                            <Facebook width="40px" height="40px"/>
                        </Link>
                        <Link href="https://twitter.com" sx={{my: 1, mx: 6}}>
                            <Twitter width="40px" height="40px"/>
                        </Link>
                        <Link href="https://instagram.com" sx={{my: 1, mx: 6}}>
                            <Instagram width="40px" height="40px"/>
                        </Link>
                        <Link href="https://vimeo.com" sx={{my: 1, mx: 6}}>
                            <Vimeo width="40px" height="40px"/>
                        </Link>
                        <Link href="https://github.com" sx={{my: 1, mx: 6}}>
                            <Github width="40px" height="40px"/>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
