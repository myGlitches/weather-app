import React from 'react'

function Content({data}) {

  return (
    <>
    <div className="cardHeading">
      <h1>{data.name}</h1>
      <div className="description">
        <h3>The Temp right now is : {data?.main?.temp} Celsius</h3>
        <h3>The Country is : {data?.sys?.country}</h3>
      </div>
    </div> 
    </>
  )
}

export default Content
