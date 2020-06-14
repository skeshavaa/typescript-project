import React, {useState } from "react"
import { Link, StaticQuery, useStaticQuery, graphql } from "gatsby"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Day from "../components/day";

const IndexPage = () => {
  const [query, setQuery] = useState("2020-5-30")

  const handler = (e) => {
    const newDay = new Date(e);
    const day = newDay.getDate().toString().length == 1 ? "0" + newDay.getDate() : newDay.getDate()
    const month = newDay.getMonth().toString().length == 1 ? "0" + newDay.getMonth() : newDay.getMonth()
    const year = newDay.getFullYear();

    const selected = year + "-" + month + "-" + day;

    setQuery(selected);
  }

  return(
    <Layout>
      <Calendar onClickDay={(e) => handler(e)}/>
      <Day current={query} />
    </Layout>
  )
  
}

export default IndexPage