import React, {forwardRef, CSSProperties, useState} from "react";
import {Badge, Box, withStyles} from "@material-ui/core";
import styles from "./style";
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CheckIcon from '@material-ui/icons/Check';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ShareIcon from '@material-ui/icons/Share';
import SettingsIcon from '@material-ui/icons/Settings';
import avatar from "./../../images/avatar.png";
import avatar1 from "./../../images/avatar1.png";

interface MenuBarProps<T = any> {
    style?: CSSProperties;
    className?: string;
    classes?: T;
}

const MenuBar = forwardRef((props: MenuBarProps, refs:any) => {
    const {
        classes,
        className,
        style
    } = props;
    const [menuItem, setMenuItem] = useState("check");
    const menuBarItems = [
        {
            icon: <CheckIcon  className={classes.menuIcon} />,
            value: "check"
        },
        {
            icon: <PersonIcon className={classes.menuIcon}   />,
            value: "person"
        },
        {
            icon: <EmailIcon className={classes.menuIcon}  />,
            value: "email"
        },
        {
            icon: <BookmarkIcon className={classes.menuIcon} />,
            value: "bookmark"
        },
        {
            icon: <ShareIcon className={classes.menuIcon} />,
            value: "share"
        },
        {
            icon: <SettingsIcon className={classes.menuIcon} />,
            value: "settings"
        }
    ];
    const organisationItems = [
        {
            avatar: avatar,
            badgeNum: 1500
        },
        {
            avatar: avatar1,
            badgeNum: 100
        }
    ];

    return (
        <Grid container spacing={0} xs={false} sm={"auto"} md={"auto"}>
            <Grid item xs={12} md={12}>
                <Box className={classes.demo}>
                    <List disablePadding={true}>
                        {
                            menuBarItems.map(item => {
                                return <ListItem className={ (menuItem == item.value) ? classes.listItemActive : classes.listItem} onClick={() => setMenuItem(item.value) }>
                                    <ListItemAvatar>
                                        <Avatar className={classes.avatarIcon}>
                                            {item.icon}
                                        </Avatar>
                                    </ListItemAvatar>
                                </ListItem>
                            })
                        }
                        <Box className={classes.line}></Box>
                        {
                            organisationItems.map(item => {
                                return <ListItem className={classes.listItem}>
                                    <ListItemAvatar>
                                        <Badge badgeContent={item.badgeNum} max={999} color={"error"} overlap="circle">
                                            <Avatar src={item.avatar} className={classes.avatarPeople} >
                                            </Avatar>
                                            </Badge>
                                    </ListItemAvatar>
                                </ListItem>
                            })
                        }
                    </List>
                </Box>
            </Grid>

        </Grid>
    )
})

export default withStyles(styles)(MenuBar);