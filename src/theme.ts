import {createMuiTheme} from "@material-ui/core/styles";
import {blueGrey, grey, lightBlue} from "@material-ui/core/colors";

declare module "@material-ui/core/styles/createPalette" {
    interface Palette {
        header: Palette["primary"];
        baseColors: Palette["primary"];
        baseLightColors: Palette["primary"];
        baseDarkColors: Palette["primary"];
    }

    interface PaletteOptions {
        header: PaletteOptions["primary"];
        baseColors: PaletteOptions["primary"];
        baseLightColors: PaletteOptions["primary"];
        baseDarkColors: PaletteOptions["primary"];
    }
}

export default createMuiTheme({
    palette: {
        type: "dark",
        header: {
            main: blueGrey[600],
            dark: grey[900],
            light: blueGrey[300],
        },
        baseLightColors: {
            main: grey[200],
            dark: grey[300],
            light: grey[100],
        },
        baseColors: {
            main: grey[500],
            dark: grey[600],
            light: grey[400],
        },
        baseDarkColors: {
            main: grey[800],
            dark: grey[900],
            light: grey[700],
        },
        primary: {
            main: lightBlue[400],
        }
    },
});