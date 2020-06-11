import React from 'react'
import { useStaticQuery, graphql } from 'gatsby' 

const Day = (props) => {

  const data = useStaticQuery(graphql`
  query my {
    gcms {
        day(where: {date: ${props.current}}){
          desc
        }
      }
  }
  `)

    return (
        <div>
            <h1>hi</h1>
        </div>
    )
}

export default Day
