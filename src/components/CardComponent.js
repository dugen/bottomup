import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardComponent({markdown}) {
    if (markdown.node.frontmatter.id===1)
    return (
        <Card sx={{ minWidth: 275, padding: 5 }}>
            <CardContent>
                <Typography style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}  variant="h3" component="div" id={markdown.node.frontmatter.link}>
                    {markdown.node.frontmatter.title}
                </Typography>
                <Typography style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} sx={{ mb: 1.5 }} color="text.secondary">
                    <div dangerouslySetInnerHTML={{__html: markdown.node.html }}/>
                </Typography>
            </CardContent>

            <CardActions style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Button size="small">Herunterladen</Button>
            </CardActions>
        </Card>
    );
    if (markdown.node.frontmatter.id===2)
        return (
            <Card sx={{ minWidth: 275, padding: 5 }}>
                <CardContent>
                    <Typography style={{justifyContent:'left'}}  variant="h3" component="div" id={markdown.node.frontmatter.link}>
                        {markdown.node.frontmatter.title}
                    </Typography>
                    <Typography style={{display: 'flex',  justifyContent:'center', alignItems:'center', maxWidth: 300, textAlign:"justify"}} sx={{ mb: 1.5 }} color="text.secondary">
                        <div dangerouslySetInnerHTML={{__html: markdown.node.html }}/>
                    </Typography>
                </CardContent>
            </Card>

        );

    if ( markdown.node.frontmatter.id===3)
        return (
            <Card sx={{ minWidth: 275, padding: 5 }}>
                <CardContent>
                    <Typography style={{display: 'flex',  justifyContent:'right', alignItems:'center'}}   variant="h3" component="div" id={markdown.node.frontmatter.link}>
                        {markdown.node.frontmatter.title}
                    </Typography>
                    <Typography style={{display: 'flex',  justifyContent:'center', alignItems:'center', maxWidth: 300, textAlign:"justify"}} sx={{ mb: 1.5 }} color="text.secondary">
                        <div dangerouslySetInnerHTML={{__html: markdown.node.html }}/>
                    </Typography>
                </CardContent>

            </Card>
        );
    if ( markdown.node.frontmatter.id===4)
        return (
            <Card sx={{ minWidth: 275, padding: 5 }}>
                <CardContent>
                    <Typography style={{display: 'flex',  justifyContent:'left', alignItems:'center'}}   variant="h3" component="div" id={markdown.node.frontmatter.link}>
                        {markdown.node.frontmatter.title}
                    </Typography>
                    <Typography style={{columnWidth:"255px ",   justifyContent:'center', alignItems:'center', textAlign:"justify"}} sx={{ mb: 1.5 }} color="text.secondary">
                        <div dangerouslySetInnerHTML={{__html: markdown.node.html }}/>
                    </Typography>
                </CardContent>
            </Card>
        );
        return (
            <Card sx={{ minWidth: 275, padding: 5 }}>
                <CardContent>
                    <Typography style={{display: 'flex',  justifyContent:'left', alignItems:'center'}}   variant="h3" component="div" id={markdown.node.frontmatter.link}>
                    {markdown.node.frontmatter.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 , textAlign:"justify"}} color="text.secondary">
                        <div dangerouslySetInnerHTML={{__html: markdown.node.html }}/>
                    </Typography>
                </CardContent>
            </Card>
        )
}