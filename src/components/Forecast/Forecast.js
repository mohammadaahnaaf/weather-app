import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import { TextField, Grid, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
import style from './style';

const Forecast = () => {

    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('metric');
    let [responseObj, setResponseObj] = useState({});
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
   
    const classes = style();

function getForecast(e) {
    e.preventDefault();

    if (city.length === 0) {
        return setError(true);
    }

    // Clear state in preparation for new data
    setError(false);
    setResponseObj({});
    
    setLoading(true);
    
    const uriEncodedCity = encodeURIComponent(city);

    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_API_KEY
        }
    })
    .then(response => response.json())
    .then(response => {
        if (response.cod !== 200) {
            throw new Error()
        }

        setResponseObj(response);
        setLoading(false);
    })
    .catch(err => {
        setError(true);
        setLoading(false);
        console.log(err.message);
    });
}

const ctr1 = <Checkbox icon={<Brightness4OutlinedIcon />} checkedIcon={<Brightness4Icon />} name="checkedH" />;
const ctr2 = <Checkbox icon={<AcUnitOutlinedIcon />} checkedIcon={<AcUnitIcon />} name="checkedH" />;

    return (
        <div className={classes.main}>
            
            <form className={classes.root} onSubmit={getForecast}>
             <Grid container direction="row" justify="center" alignItems="center" className={classes.searchBar}>
               <Grid item className={classes.right} xs={6}>
                 <TextField
                    variant="outlined"
                    type="text"
                    size='large'
                    placeholder="Enter City"
                    className={classes.textInput}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    /></Grid>
                    <Grid item className={classes.left} xs={6}>
                    <Button
                       className={classes.button}
                       variant="contained" 
                       color="secondary" 
                       type="submit"
                       size="large"
                       >
                         <SearchIcon />
                       </Button></Grid>
                 </Grid>
                 
                    <div>
                    <Grid className={classes.units} container direction="row" justify="center" alignItems="center"> 

                    <Grid item className={classes.item} xs={3}>
                    <FormControlLabel
                        control={ctr2}
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                    /></Grid><Grid item className={classes.item} xs={3}><label>°F</label></Grid>
                    
                    <Grid item className={classes.item} xs={3}> <label>°C</label></Grid>
                    <Grid item className={classes.item} xs={3}>
                    <FormControlLabel
                        control={ctr1}
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                    /></Grid>
                
                </Grid></div>
            </form>
            <Conditions
               responseObj={responseObj}
               error={error}
               loading={loading}
               />
        </div>
    )
}

export default Forecast;