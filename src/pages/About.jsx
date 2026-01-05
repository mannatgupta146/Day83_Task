import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {

  const params = useParams()
  return (
    <div>
      <h1>About {params.id}</h1>
    </div>
  )
}

export default About
