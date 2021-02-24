import {createStyles, Theme} from "@material-ui/core/styles";


const styles = (theme: Theme) => createStyles({
   appBar: {
        background: '#303030',
        color: theme.palette.baseLightColors.dark,
        boxShadow: "none"
   },
    toolbar: {
        background: '#303030',
        color: theme.palette.baseLightColors.dark,
        minHeight: "50px",
        borderRadius: "0px",
        padding: "0px 17px"
    },
    grow: {
       flexGrow : 1
    },
    list:{
      width: '87.5vw',
        fontSize: "14px"
    },
    titleBox: {
      "& div": {
          margin: "0px",
          padding: "0px"
      }
    },
    title:{
       marginLeft: '0.45vw',
       textTransform: 'uppercase',
        fontSize: "12px"
    },
   avatar: {
       background: theme.palette.baseDarkColors.dark,
       marginLeft: '-1.5vw'
   },
    avatarColor: {
        width: '1.7vw',
        height: '1.7vw',
        background: theme.palette.baseColors.light,
        border: '0.14vw solid #388E3C'
    }
});

export default styles;