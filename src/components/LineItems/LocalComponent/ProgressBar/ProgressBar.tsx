import React, {forwardRef, CSSProperties}  from "react";
import {Box, LinearProgress, withStyles} from "@material-ui/core";
import styles from "./style";
import Avatar from "@material-ui/core/Avatar";
import CheckIcon from "@material-ui/icons/Check";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import TableCell from "@material-ui/core/TableCell";


interface ProgressBarProps<T = any> {
    style?: CSSProperties;
    className?: string;
    classes?: T;
    status: string;
    progress: number;
}

const ProgressBar = forwardRef((props: ProgressBarProps, refs:any) => {
    const {
        classes,
        className,
        style,
        status,
        progress
    } = props;

    const renderProgressBar = (status: string, progress: number ) => {
        switch (status) {
            case "active":
                return <LinearProgress variant="determinate" value={progress}  className={classes.progressActive} />
            case "done":
                return <LinearProgress variant="determinate" value={progress}  className={classes.progressDone} />
            case "error":
                return <LinearProgress variant="determinate" value={progress}  className={classes.progressError} />
            default:
                return <LinearProgress variant="determinate" value={progress}  className={classes.progress} />
        }
    }

    return (
         <>{renderProgressBar(status, progress)}</>
    )
});

export default withStyles(styles)(ProgressBar);