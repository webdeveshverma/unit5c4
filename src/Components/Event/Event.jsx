// This is an event details page which has its own route

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components"
export const Event = () => {
  const {id} =useParams()
  const [meet,setMeet] =useState({})

  const Main =styled.div`
  border :2px solid gray;
  width : 600px;
  margin: auto;
`

  useEffect(()=>{
    axios.get(`http://localhost:8080/meetups/${id}`).then((res)=>{
      setMeet({...res.data})
      console.log(res.data)
    })
  },[])
  return (
    <div className="eventContainer">
      { <Main>
                    <h2 className="title">{meet.title} </h2>
                    <h4 className="theme">{meet.theme}</h4>
                    <p className="description">{meet.description}</p>
                    <p className="date">{meet.date}</p>
                    <p className="time">{meet.time}</p>
                    <p className="location">{meet.location}</p>
                    <img className="image" src={meet.image} alt="" />
                  </Main>}
      {/* add your children here (divs)
      ex : title, theme, description, date, time, location, image(optional)
      the classNames should be also : title, theme, description, date, time, location, image(optional)
      */}

      {/* only one of the buttons should be visible depending on the status of subcription
      Hint : use conditional rendering */}
      <button className="unsubscribe">Unsubscribe</button>
      <button className="subscribe" onClick={() => { }}>Subscribe</button>
    </div>
  );
};
