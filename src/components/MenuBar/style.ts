import {createStyles, Theme} from "@material-ui/core/styles";
import {lightBlue, red} from "@material-ui/core/colors";


const styles = (theme: Theme) => createStyles({
    demo: {
        width: "100%",
        padding: "12px 0"
    },
    listItem: {
      padding: "0px 12px 12px 12px"
    },
    listItemActive: {
        padding: "0px 12px 12px 12px",
        "&::after": {
            content: `''`,
            position: 'absolute',
            left: '0px',
            top: '5px',
            width: '4px',
            height: '44px',
            background: "#BDBDBD",
            borderRadius: "0px 6px 6px 0px"
        }
    },
    avatarIcon: {
        width: "54px",
        height: "54px",
        background: theme.palette.baseDarkColors.main,
        padding: 7
    },
    menuIcon: {
        color: lightBlue[500],
        opacity: "60%"
    },
    line: {
        width: "36px",
        height: "2px",
        background: theme.palette.baseDarkColors.main,
        margin: "0px 21px 12px 21px"
    },

    avatarPeople: {
        width: "54px",
        height: "54px",
    }

});

export default styles;