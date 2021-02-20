import React, {forwardRef, CSSProperties}  from "react";
import {withStyles} from "@material-ui/core";
import styles from "./style";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import logo from './../../images/atlasLogo.svg';

interface AuthorizationPageProps<T = any> {
    style?: CSSProperties;
    className?: string;
    classes?: T;
}

const AuthorizationPage = forwardRef((props: AuthorizationPageProps, refs:any) => {
    const {
        classes,
        className,
        style
    } = props;
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={7} md={7} className={classes.image} />
            <Grid item xs={12} sm={5} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <img src={logo} alt="logo" className={classes.logo} />
                    <Typography component="h1" variant="h5" className={classes.headline}>
                        Authorization
                    </Typography>
                    <form className={classes.form} noValidate>
                        <label className={classes.label}>Username</label>
                        <TextField
                            required
                            fullWidth
                            id="username"
                            placeholder="Enter Username"
                            name="username"
                            autoComplete="username"
                            className={classes.formItem}
                        />
                        <label className={classes.label}>Password</label>
                        <TextField
                            required
                            fullWidth
                            name="password"
                            placeholder="Enter Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            className={classes.formItem}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className={classes.submit}
                        >
                            Log In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2" className={classes.text}>
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2" className={classes.text}>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>
        </Grid>
    )
})

export default withStyles(styles)(AuthorizationPage);