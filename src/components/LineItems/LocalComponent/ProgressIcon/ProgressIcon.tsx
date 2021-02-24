import React, {forwardRef, CSSProperties}  from "react";
import {Box, withStyles} from "@material-ui/core";
import styles from "./style";
import Avatar from "@material-ui/core/Avatar";
import CheckIcon from "@material-ui/icons/Check";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";


interface ProgressIconProps<T = any> {
    style?: CSSProperties;
    className?: string;
    classes?: T;
    status: string;
    num: number|null;
}

const ProgressIcon = forwardRef((props: ProgressIconProps, refs:any) => {
    const {
        classes,
        className,
        style,
        status,
        num
    } = props;

    const renderProgressIcon = (status: string, num: number|null ) => {
        switch (status) {
            case "active":
                return <Avatar className={classes.avatarActive} > <Avatar className={classes.iconActive}>{num}</Avatar></Avatar>
            case "done":
                return <Avatar className={classes.avatarDone} >
                    <CheckIcon className={classes.iconDone} />
                </Avatar>
            case "error":
                return <Avatar className={classes.avatarError} > <Avatar className={classes.iconError}>{num}</Avatar> </Avatar>
            default:
                return <Avatar className={classes.avatar} >
                    <CalendarTodayIcon className={classes.icon} />
                </Avatar>
        }
    }

    return (
         <>{renderProgressIcon(status, num)}</>
    )
});

export default withStyles(styles)(ProgressIcon);