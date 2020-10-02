import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import cyan from '@material-ui/core/colors/cyan';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: purple[600],
        },
        secondary: {
            main: cyan[200],
        },
    },
});

export default theme;