import React from 'react'
import { useStaticQuery, graphql } from 'gatsby' 

const Day = (props) => {

  const data = useStaticQuery(graphql`
  query allData {
    gcms {
        days{
          desc
          date
        }
      }
  }
  `)

  var dict = {}

  data.gcms.days.map((day) => {
    dict[day.date] = day;
  })

    return (
        <div>
            {dict[props.current] == null ? <h1>Hello!</h1> : <h1>{dict[props.current].desc}</h1>}
        </div>
    )
}

export default Day
