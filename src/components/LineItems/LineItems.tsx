import React, {forwardRef, CSSProperties, useState} from "react";
import {Badge, Box, LinearProgress, ListItem, ListItemIcon, ListItemText, withStyles} from "@material-ui/core";
import styles from "./style";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Items from "./LocalComponent/Items";

interface LineItemsProps<T = any> {
    style?: CSSProperties;
    className?: string;
    classes?: T;
}

const LineItems = forwardRef((props: LineItemsProps, refs:any) => {
    const {
        classes,
        className,
        style
    } = props;


    const rows = [
        {
            name: "Rerender job 1",
            date: "22.07.2021",
            status: "active",
            progress: 50,
            num: 30
        },
        {
            name: "Rerender job 2",
            date: "22.07.2021",
            status: "done",
            progress: 100,
            num: null

        },
        {
            name: "Rerender job 3",
            date: "22.07.2021",
            status: "",
            progress: 0,
            num: null

        },
        {
            name: "Rerender job 4",
            date: "22.07.2021",
            status: "error",
            progress: 25,
            num: 30

        },
        {
            name: "Rerender job 5",
            date: "22.07.2021",
            status: "active",
            progress: 50,
            num: 30
        },
        {
            name: "Rerender job 6",
            date: "22.07.2021",
            status: "done",
            progress: 100,
            num: null

        },
        {
            name: "Rerender job 7",
            date: "22.07.2021",
            status: "",
            progress: 0,
            num: null

        },
        {
            name: "Rerender job 8",
            date: "22.07.2021",
            status: "error",
            progress: 25,
            num: 30

        },
        {
            name: "Rerender job 9",
            date: "22.07.2021",
            status: "",
            progress: 0,
            num: null

        },
        {
            name: "Rerender job 10",
            date: "22.07.2021",
            status: "error",
            progress: 25,
            num: 30

        },
        {
            name: "Rerender job 11",
            date: "22.07.2021",
            status: "done",
            progress: 100,
            num: null

        },
        {
            name: "Rerender job 12",
            date: "22.07.2021",
            status: "",
            progress: 0,
            num: null

        },
        {
            name: "Rerender job 13",
            date: "22.07.2021",
            status: "error",
            progress: 25,
            num: 30

        }
    ];
    return (
        <Box className={classes.root}>
            <TableContainer >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">NAME</TableCell>
                            <TableCell align="center">DATE</TableCell>
                            <TableCell align="center">PROGRESS</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => <Items
                                                        key={row.name}
                                                        status={row.status}
                                                        progress={row.progress}
                                                        num={row.num}
                                                        date={row.date}
                                                        name={row.name}
                                                      />)}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
})

export default withStyles(styles)(LineItems);
