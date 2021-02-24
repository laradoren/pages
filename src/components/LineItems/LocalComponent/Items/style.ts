import {createStyles, Theme} from "@material-ui/core/styles";


const styles = (theme: Theme) => createStyles({
    cell: {
        textAlign: "center",
        width: "40%",
        padding: "0"
    },
    error: {
        background: "rgba(138, 43, 13, 0.2)"
    },
    errorText: {
        color: theme.palette.status.orange
    }
});

export default styles;