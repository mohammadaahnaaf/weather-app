import { makeStyles } from "@material-ui/core";
import photo from '../images/photo.png';

const style = makeStyles((theme) => ({
    app: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundImage: `url(${photo})`
      },
      background: {
        backgroundImage: `url(${photo})`
    },
    greetings: {
        filter: 'brightness(100%)',
    },
    header: {
        backgroundColor: "black",
        
        opacity: '40%',
        minHeight: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "white",
        padding: "25px"
    },
    main: {
        flexGrow: 1,
        textAlign: "center",
        padding: "25px",
    },
    footer: {
        padding: "2px",
        opacity: '60%',
        color: 'white',
        minHeight: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "purple",
        fontSize: "small",
        textAlign: "center"
      }

}));

export default style;