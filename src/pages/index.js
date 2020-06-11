import React from "react"
import { Link, StaticQuery, useStaticQuery, graphql } from "gatsby"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Day from "../components/day";

const IndexPage = () => {

  let currentDay = <Day current="2020-5-30"/>

  const handler = (e) => {
    const newDay = new Date(e);
    const day = newDay.getDate();
    const month = newDay.getMonth();
    const year = newDay.getFullYear();

    const query = year + "-" + month + "-" + day;
    console.log(query);
  }

  return(
    <div>
      <Calendar onClickDay={(e) => handler(e)}/>
      <Day />
    </div>
  )
  
}

export default IndexPage