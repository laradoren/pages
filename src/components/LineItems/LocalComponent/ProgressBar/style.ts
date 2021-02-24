import {createStyles, Theme} from "@material-ui/core/styles";


const styles = (theme: Theme) => createStyles({
    progress: {
        width: "19vw",
        top: "14px",
        background: theme.palette.status.grey
    },
    progressActive: {
        width: "19vw",
        top: "14px",
        background: theme.palette.status.grey,
        "& div": {
            background: theme.palette.status.blue,
        }
    },
    progressDone: {
        width: "19vw",
        top: "14px",
        background: theme.palette.status.grey,
        "& div": {
            background: theme.palette.status.green,
        }
    },
    progressError: {
        width: "19vw",
        top: "14px",
        background: "#712D2D",
        "& div": {
            background: theme.palette.status.orange,
        }
    }
});

export default styles;