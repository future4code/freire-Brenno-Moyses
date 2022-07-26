import { createTheme } from '@mui/material/styles';
import { primaryColor, neutralColor } from './colors';

const theme = createTheme({
palette: {
    primary: {
    main: primaryColor,
    contrastText: "#4088CB"       
    },
    text: {
        primary: neutralColor
    }
    },
    });

export default theme


