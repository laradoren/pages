import React, {forwardRef, CSSProperties}  from "react";
import {
    Accordion,
    AccordionActions,
    AccordionDetails,
    AccordionSummary,
    Avatar,
    Box, Button, Divider,
    withStyles
} from "@material-ui/core";
import styles from "./style";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from "@material-ui/core/Paper";


interface OrganisationProps<T = any> {
    style?: CSSProperties;
    className?: string;
    classes?: T;
}

const Organisation = forwardRef((props: OrganisationProps, refs:any) => {
    const {
        classes,
        className,
        style
    } = props;

    return (
        <Grid className={classes.root}>
            <CssBaseline />

            <Toolbar className={classes.toolbar} component={Paper}>
                    <Typography>Dungeon 1</Typography>
                    <Box className={classes.grow} />
                    <SettingsIcon className={classes.icon} />
            </Toolbar>
            {['DEFAULT POOL', 'VFX', 'Visual department', 'A POOL WITH VERY LONG NA...', 'CUSTOM EFFECTS','GAME VISUAL EFFECTS'].map((value) => {
                return(
                <Accordion className={classes.appBar} style={{margin: "0px"}}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>} style={{margin: "0px"}}>
                        <Typography className={classes.title} style={{margin: "0px"}}>{value}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List className={classes.root} style={{width: "100%"}}>
                            {[0, 1, 2, 3].map((value) => {
                                return (
                                    <ListItem key={value} style={{width: "100%"}}>
                                        <ListItemAvatar >
                                            <Avatar className={classes.avatar}
                                                    src={`/static/images/avatar/${value + 1}.jpg`}
                                            />
                                        </ListItemAvatar>
                                        <ListItemText className={classes.list}>{`Slave ${value + 1}`}</ListItemText>
                                        <AccordionActions>
                                            <Avatar className={classes.avatarColor}/>
                                        </AccordionActions>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </AccordionDetails>
                </Accordion>
                );
            })}
        </Grid>
    );
});

export default withStyles(styles)(Organisation);