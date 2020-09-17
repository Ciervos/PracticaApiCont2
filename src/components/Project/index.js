import React from 'react'

function Project(props) {
  const {name ,description, html_url} = props.data;

  return (
    <>
    <h3>{name}</h3>
    <p>{description}</p>
    <p>URL: {html_url}</p>
    </>
  )
}

export default Project;