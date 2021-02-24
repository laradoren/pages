import React, {forwardRef, CSSProperties}  from "react";
import {Box, LinearProgress, ListItem, ListItemIcon, ListItemText, withStyles} from "@material-ui/core";
import styles from "./style";
import Avatar from "@material-ui/core/Avatar";
import CheckIcon from "@material-ui/icons/Check";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import TableCell from "@material-ui/core/TableCell";
import List from "@material-ui/core/List";
import ProgressIcon from "../ProgressIcon/ProgressIcon";
import ProgressBar from "../ProgressBar/ProgressBar";
import TableRow from "@material-ui/core/TableRow";


interface ItemsProps<T = any> {
    style?: CSSProperties;
    className?: string;
    classes?: T;
    name: string,
    status: string,
    num: number|null,
    date: string,
    progress: number
}

const Items = forwardRef((props: ItemsProps, refs:any) => {
    const {
        classes,
        className,
        style,
        name,
        status,
        num,
        date,
        progress

    } = props;

    return (
         <>
             <TableRow key={name} className={(status === "error") ? classes.error : ""}>
                 <TableCell component="th" scope="row" className={classes.cell}>
                     <List>
                         <ListItem >
                             <ListItemIcon style={{minWidth: "44px"}}>
                                 <ProgressIcon status={status} num={num} />
                             </ListItemIcon>
                             <ListItemText primary={name} className={(status === "error") ? classes.errorText : ""} />
                         </ListItem>
                     </List>
                 </TableCell>
                 <TableCell align="center" width={"20%"}  style={{padding: "0"}}
                            className={(status === "error") ? classes.errorText : ""}
                 >{date}</TableCell>
                 <TableCell align="right" width={"40%"}  style={{padding: "0"}}>
                     <ProgressBar status={status} progress={progress} /> <MoreVertIcon />
                 </TableCell>
             </TableRow>
         </>
    )
});

export default withStyles(styles)(Items);