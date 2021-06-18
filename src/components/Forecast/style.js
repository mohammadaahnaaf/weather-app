import { makeStyles } from '@material-ui/core/styles';

const style = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        marginLeft: '25%',
        marginRight: '25%'
    },
    textInput: {
        display: "flex",
        borderRadius: '5vh',
        background: 'white',
        opacity: '70%',
        height: '60px',
        marginRight: theme.spacing(2),
    },
    button: {
        opacity: '70%',
        borderRadius: '5vh',
        height: '60px',
        display: 'flex',
        color: "white",
        width: "500px",
        alignContent: 'flex-start'
    },
    searchBar: {
        height: '80px',
    },
    units: {
        height: '50px',
        width: '5ch',
        direction: "row",
        justifyContent: "center",
        alignItems: "center",
        marginRight: '35%',
        marginLeft: '35%',
        borderRadius: '5vh',
        background: 'black',
        opacity: '70%'
    },
    item: {
        fontSize: '25px',
        color: 'white',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        direction: "row",
        justify: "center",
        alignItems: "center"
    }
  }));

  export default style;