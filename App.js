import React from 'react';
import Cards from './components/Cards/Cards.jsx';
import Charts from './components/Chart/Charts.jsx';
import CountryPicker from './components/CountryPicker/CountryPicker.jsx';
import {fetchData} from './components/api';
import styles from './App.module.css';
import img1 from './images/img.png';

class App extends React.Component{

    state = {
      data:{},
      country:'',
    }
  


  async componentDidMount(){
    const data =await fetchData();

    this.setState({data});
  }
  handleCountryChange = async (country) => {
    
    const data = await fetchData(country);
    
    this.setState({data, country:country});
    //fetch data 
    // set the state
  }
  
  render(){
    const {data,country} =this.state;
  return (
    <div className={styles.container}>
      <img src={img1} className={styles.image} alt='covid19'/>
  <Cards data={data} />
  <CountryPicker handleCountryChange={this.handleCountryChange}/>
  <Charts data={data} country={country}  />
  <footer>
    <h1 className='py-3' style={{fontWidth:"800"}}>
      Created by - Raj Kumar
    </h1>
  </footer>
    </div>
  );
} 
}

export default App;
