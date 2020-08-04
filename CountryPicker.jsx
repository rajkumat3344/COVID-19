import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchcountries} from './../api';
const CountryPicker = ({handleCountryChange}) => {
    const [countries,setCountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async() =>{
            setCountries(await fetchcountries());
        }
        
           fetchAPI();
       
    }, [setCountries]);

    return (

 <FormControl className={styles.formControl}>
     <NativeSelect defaultValue='' onChange={(e)=>handleCountryChange(e.target.value)}>
         <option value=''>
             Global
         </option>
         {countries.map((country,i)=> <option key={i} value={country}> {country}</option>)}
     </NativeSelect>
 </FormControl>

    );
}
export default CountryPicker;
