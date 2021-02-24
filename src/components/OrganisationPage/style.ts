import {createStyles, Theme} from "@material-ui/core/styles";


const styles = (theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
        minHeight: "100vh",
        color: theme.palette.baseLightColors.dark,

    },
    paper: {
        padding: theme.spacing(0),
        background: "white",
        minHeight: "calc(100vh - 50px)"

    },
    menuBar: {
        background: theme.palette.baseDarkColors.dark,
        width: 78,
        '@media screen and (max-width: 600px)': {
            display: 'none'
        }
    },
    organisation: {
        background: '#303030',
        color: theme.palette.baseLightColors.dark
    },
    mainPart: {
        width: "calc(100vw - 78px - 20%)",

    },
    header: {
        height: 50,
        background: theme.palette.baseDarkColors.main,
    },
    lineItems: {
        background: theme.palette.baseDarkColors.main,
        '@media screen and (max-width: 900px)': {
            maxWidth: "100%",
            flexBasis: "100%"
        }
    },
    users: {
        background: "#303030",
        '@media screen and (max-width: 900px)': {
            maxWidth: "0",
        }
    }

});

export default styles;