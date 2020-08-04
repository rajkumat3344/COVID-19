import React,{useState,useEffect} from 'react';
import {fetchDailyData} from './../api';
import {Line,Bar} from 'react-chartjs-2';

import styles from './Charts.module.css';
const Charts = ({data,country}) => {
    const [dailyData,setDailyData] = useState([]);

    useEffect(() => {
 const fetchAPI = async() => {
     setDailyData(await fetchDailyData());
 }

 fetchAPI();
    },[]);
    const lineChart = (
     dailyData[0] ?(<Line 
         data={{
         labels:dailyData.map(({date}) => date),
         datasets:[{
             data: dailyData.map(((data) => data.confirmed)),
             label:'Infected',
             borderColor:'#3333ff',
             fill:true,
         },{
            data: dailyData.map(((data) => data.deaths)),
            label:'Deaths',
            borderColor:'red',
            backgroudColor: 'rgba(255,0,0,0.5)',
            fill:true,
         },
        ] ,
     }}
     />): null
    );
    const barChart =(
        data.confirmed ? (
            <Bar 
            data={{
              labels:['Infected','Recovered','Deaths'],
              datasets:[{
                  label:"people",
                  backgroundColor:["rgba(200, 255, 0, 0.657)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)"],
                  data:[data.confirmed.value,data.recovered.value,data.deaths.value]
              }]
            }}
            option={{
             legend:{display:false},
             title:{display:true,text:`Current state in ${country}`},   
            }}
            />
        ): null
    )
 
    return (
<div className={styles.container}>
  {country ? barChart:lineChart}
</div>
    );
}
export default Charts;
