import {createStyles, Theme} from "@material-ui/core/styles";


const styles = (theme: Theme) => createStyles({
    avatar: {
        width: 28,
        height: 28,
        background: theme.palette.status.grey

    },
    icon: {
        fontSize: 14,
        color: theme.palette.baseLightColors.dark
    },
    avatarActive: {
        width: 28,
        height: 28,
        background: theme.palette.status.blue

    },
    iconActive: {
        width: 20,
        height: 20,
        fontSize: 10,
        color: theme.palette.baseLightColors.dark,
        background: theme.palette.baseDarkColors.main,
    },
    avatarDone: {
        width: 28,
        height: 28,
        background: theme.palette.status.green

    },
    iconDone: {
        fontSize: 14,
        color: theme.palette.baseDarkColors.main,
    },
    avatarError: {
        width: 28,
        height: 28,
        background: theme.palette.status.orange

    },
    iconError: {
        width: 20,
        height: 20,
        fontSize: 10,
        color: theme.palette.baseLightColors.dark,
        background: theme.palette.baseDarkColors.main,
    },
});

export default styles;