import { makeStyles } from "@material-ui/core";

const style = makeStyles((theme) => ({

    "@keyframes spin": {
        "0%": { transform: 'rotate(0)' },
        "100%": { transform: 'rotate(360)' }
      },
    

    main: {
        marginLeft: '33%',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },

    root: {
        minWidth: 275,
        width: '50%',
        opacity: '65%',
        alignContent: 'center',
        alignItems: 'center',
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      wrapper: {
        minHeight: '100px',
        display: 'flex',
        flexDirection: 'column'
    },
    small: {
        color: 'red'
    },
    loader: {
        border: "16px solid blue", /* Light grey */
        opacity: '70%',
        borderTop: "16px solid rgb(90, 89, 89)", /* Blue */
        borderRadius: '50%',
        width: "50px",
        height: "50px",
        animation: "spin 2s linear infinite",
        margin: "10px auto",
    }
}));

export default style;