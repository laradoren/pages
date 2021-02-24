import React, {forwardRef, CSSProperties}  from "react";
import {Box, Container, withStyles} from "@material-ui/core";
import styles from "./style";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import logo from './../../images/atlasLogo.svg';
import MenuBar from "../MenuBar";
import Header from "../Header";
import LineItems from "../LineItems";
import Organisation from "../Organisation";

interface OrganisationPageProps<T = any> {
    style?: CSSProperties;
    className?: string;
    classes?: T;
}

const OrganisationPage = forwardRef((props: OrganisationPageProps, refs:any) => {
    const {
        classes,
        className,
        style
    } = props;
    return (
                <Grid container spacing={0} className={classes.root}>
                    <Grid item xs={false} sm={"auto"} md={"auto"} className={classes.menuBar}>
                        <MenuBar />
                    </Grid>
                    <Grid item xs={false} sm={2} md={2} className={classes.organisation}>
                        <Organisation />
                    </Grid>
                    <Grid container spacing={0} xs={12} sm={true} md={true} item className={classes.mainPart}>
                        <Grid item xs={12} sm={12} className={classes.header}>
                            <Header />
                        </Grid>
                        <Grid item xs={12} sm={10} md={true} className={classes.lineItems}>
                            <LineItems />
                        </Grid>
                        <Grid item xs={false} sm={2} md={false}  className={classes.users}>
                        </Grid>
                    </Grid>
                </Grid>
    )
})

export default withStyles(styles)(OrganisationPage);