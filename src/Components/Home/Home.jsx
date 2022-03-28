import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import { useNavigate, useParams } from 'react-router'
// import { AddMeetup } from "../AddMeetup/AddMeetup";

export const Home = () => {
  const [meet,setMeet] =useState([])
  const navigate =useNavigate()
  const {id} =useParams()


  useEffect(()=>{
    axios.get("http://localhost:8080/meetups").then((res)=>{
      setMeet([...res.data])
      console.log(res.data)
    })
  },[])
  const Main =styled.div`
    border :2px solid gray;
    width : 600px;
    margin: auto;
  `
  return (
    <div className="homeContainer">
      {[]
        .filter((el) => { }) // Filter on the basis of Users interests and location (both true)
        .map((el) => {
          return (
            <Link to={`add route here`} className="events">
              {/* add your children here (divs)
              ex : title, theme, description, date, time, location, image(optional)
              the classNames should be also : title, theme, description, date, time, location, image(optional)
             */}
            </Link>
          );
        })}

      <div className="subscribedData">
        <div>
          <select
            value={"add your value here"}  // add value here
            onChange={(e) => { }}
          >
            <option value="">------</option>
            <option value="bangalore">Bangalore</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>
        <Link to={`/addmeetup`}> Add Meetup</Link>
        <h1>Subscribed Events</h1>
        <div className="subscribedEvents">
          {/* All user subcribed events should be displayed here in an ascending order of date */}

          {meet
            .map((el) => {
              return (
                <Link to={`meetup/${el.id}`} className="events">
                  <Main key={el.id}>
                    <h2 className="title">{el.title} </h2>
                    <h4 className="theme">{el.theme}</h4>
                    <p className="description">{el.description}</p>
                    <p className="date">{el.date}</p>
                    <p className="time">{el.time}</p>
                    <p className="location">{el.location}</p>
                    <img className="image" src={el.image} alt="" />
                  </Main>
                  {/* Each event should have these elements/children (divs):
                    ex : title, theme, description, date, time, location, image(optional)
                    the classNames should be also : title, theme, description, date, time, location, image(optional) */}
                </Link>
              );
            })}

        </div>
      </div>
    </div>
  );
};
