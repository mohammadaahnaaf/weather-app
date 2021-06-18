import React, { useState } from 'react';
import moment from 'moment';
import style from './style';
import { Typography, Card, CardContent } from '@material-ui/core';


const conditions = (props) => {
    // console.log(props);
    const classes = style();
    
    let [ unit ] = useState("metric");
    let unitName;
    // console.log(unit);
    if(unit === "metric") {
        unitName = '°C'
    } else {
        unitName = '°F'
    }
    
    return (
        
        <div className={classes.wrapper}>

            {props.error && <h4 className={classes.small}>Please enter a valid city</h4>}

            {props.loading && <div className={classes.loader} />}


            {props.responseObj.cod === 200 ?
                <div className={classes.main}>

                    <Card className={classes.root} variant="outlined">
                 <CardContent>
                 <Typography className={classes.pos} color="secondary">
                      {moment().format('dddd')}, {moment().format('LL')}
                   </Typography>
                   <Typography variant="h5" component="h2">
                      {props.responseObj.name}
                   </Typography>
                   
                   <Typography variant="h5" color='secondary' component="h2">
                       {Math.round(props.responseObj.main.temp)} {unitName}  
                   </Typography>
                   <Typography className={classes.pos} color='primary'>
                      Feels Like {Math.round(props.responseObj.main.feels_like)} {unitName}   
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                      The weather is {props.responseObj.weather[0].description}
                   </Typography>
                   <Typography className={classes.pos} color="primary">
                      Visibility {Math.round(props.responseObj.visibility/1000)} mile 
                      Humidity {Math.round(props.responseObj.main.humidity)} %  
                      Wind Speed {Math.round(props.responseObj.wind.speed)} mile/h
                   </Typography>
                   <Typography className={classes.pos} color="secondary">
                   Maximum Temperature {Math.round(props.responseObj.main.temp_max)} {unitName}  
                    Minimum Temperature {Math.round(props.responseObj.main.temp_min)} {unitName}   
                   </Typography>
                   <Typography className={classes.pos} color="primary">
                      <span> Sunrise {new Date(props.responseObj.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</span> <br/>  
                        Sunset {new Date(props.responseObj.sys.sunset * 1000).toLocaleTimeString('en-IN')}
                     </Typography>

                 </CardContent>
               </Card>
                             
                           </div>
            : null
            }
        </div>
    )
}

export default conditions;



    /* <h2><strong>{props.responseObj.name}</strong></h2>
                    <p>It is currently {Math.round(props.responseObj.main.temp)} °C The Weather is {props.responseObj.weather[0].description}</p>
                    <p>Feels Like {Math.round(props.responseObj.main.feels_like)} °C </p>    
                    <p>Maximum Temperature {Math.round(props.responseObj.main.temp_max)} °C </p> 
                    <p>Minimum Temperature {Math.round(props.responseObj.main.temp_min)} °C </p>      
                    <p>Humidity {Math.round(props.responseObj.main.humidity)} % </p>   
                    <p>Wind Speed {Math.round(props.responseObj.wind.speed)} mile/h</p>  
                    <p>Visibility {Math.round(props.responseObj.visibility/1000)} mile</p>
                    <p>Sunrise {new Date(props.responseObj.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                    <p>Sunset {new Date(props.responseObj.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                    <p>Today is {moment().format('dddd')}, {moment().format('LL')}</p> */