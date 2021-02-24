import React, {forwardRef, CSSProperties}  from "react";
import {Box, withStyles} from "@material-ui/core";
import styles from "./style";
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VisibilityIcon from '@material-ui/icons/Visibility';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Paper from "@material-ui/core/Paper";


interface HeaderProps<T = any> {
    style?: CSSProperties;
    className?: string;
    classes?: T;
}

const Header = forwardRef((props: HeaderProps, refs:any) => {
    const {
        classes,
        className,
        style
    } = props;

    return (
                <Toolbar className={classes.toolbar} component={Paper}>
                    <Typography>Render Jobs</Typography>
                        <Box className={classes.grow} />
                        <IconButton className={classes.buttons}>
                            <BookmarkIcon className={classes.icon} />
                            <FavoriteIcon className={classes.icon} />
                            <VisibilityIcon className={classes.icon} />
                            <MoreVertIcon className={classes.icon} />
                        </IconButton>
                </Toolbar>
    )
})

export default withStyles(styles)(Header);