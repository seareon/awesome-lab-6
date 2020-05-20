import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {Paper} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 650,
    },
}));

export default function CinemasTable(props) {
    const classes = useStyles();
    const cinemas = props.cinemas;
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cinemas.map(cinema => (
                        <TableRow key={cinema._id}>
                            <Link to={'/cinemas/' + cinema._id}>
                                <TableCell component="th" scope="row">
                                    {cinema.name}
                                </TableCell>
                            </Link>
                            <TableCell align="right">{cinema.address}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
};
