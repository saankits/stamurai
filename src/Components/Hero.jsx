import React, {useState} from 'react'
import { lookupViaCity } from 'city-timezones'
import { CityData } from "../assets/CityData"

const Hero = (props) => {
  const [currIn, setCurrIn] = useState(25)
  const [reqd, setReqd] = useState(CityData.slice(0,currIn))
  // infinite Scroll
  const handleScroll = (event) => {
    if(currIn >= CityData.length-1){
      if(event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight){
        setReqd([...reqd,...CityData.slice(0,15)])
        setCurrIn(15)
      }
    }
    else{
      if(event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight){
        setReqd([...reqd,...CityData.slice(currIn,currIn+15)])
        setCurrIn(currIn+15)
      }
    }
  }
  return (

    <div className='city-table' onScroll={handleScroll} >
        
      <table>
        <thead>
            <tr>
                <th className='city'>City</th>
                <th className='con'>Country</th>
                <th className='tz'>TimeZone</th>
            </tr>
        </thead>
        <tbody>
            {  props.searchIn == "" ?
                (reqd.map((details,ind)=>(
                    <tr key={ind}>
                        <td onClick={()=>props.handlepage(details.name)}>{details.name}</td>
                        <td>{details.country}</td>
                        <td>{
                            lookupViaCity(details.name)[0] ? lookupViaCity(details.name)[0].timezone : "UnKnown"
                        // details.timezone
                        }</td>
                    </tr>
                ))): CityData.filter((city)=>city.name.toLowerCase().includes(props.searchIn.toLowerCase())).map((details,ind)=>(
                  <tr key={ind}>
                        <td onClick={()=>props.handlepage(details.name)}>{details.name}</td>
                        <td>{details.country}</td>
                        <td>{
                            lookupViaCity(details.name)[0] ? lookupViaCity(details.name)[0].timezone : "UnKnown"
                        // details.timezone
                        }</td>
                    </tr>
                ))
            }
            
        </tbody>
      </table>
      </div>
  )
}

export default Hero
