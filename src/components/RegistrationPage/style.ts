import {createStyles, Theme} from "@material-ui/core/styles";
import bgImage from './../../images/bgImage.png';
import {red} from "@material-ui/core/colors";


const styles = (theme: Theme) => createStyles({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        borderRight: "4px solid #616161"
    },
    logo: {
      width: '12vw'
    },
    headline: {
        fontSize: '36px',
        color: theme.palette.baseLightColors.dark,
        margin: theme.spacing(3, 3)
    },
    paper: {
        margin: theme.spacing(5, 3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
    },
    formItem: {
        marginBottom: theme.spacing(3),
        color: theme.palette.secondary.dark
    },
    submit: {
        background: theme.palette.baseDarkColors.dark,
        color: "rgba(255,255,255,0.75)",
        fontWeight: 500,
        margin: theme.spacing(1, 0, 1.5),
    },
    text : {
        color: theme.palette.baseLightColors.dark
    },
    label : {
        color: theme.palette.baseLightColors.dark,
        opacity: "50%"
    },
    error: {
        color: red[800]
    }
});

export default styles;