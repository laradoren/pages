import {createStyles, Theme} from "@material-ui/core/styles";


const styles = (theme: Theme) => createStyles({
    toolbar: {
      minHeight: "100%",
        borderRadius: "0px"
    },
    grow: {
        flexGrow: 1,
    },
    buttons: {
      padding: 0
    },
    icon:{
        marginLeft: '1.7vw'
    }
});

export default styles;