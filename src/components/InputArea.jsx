import {useState} from 'react'
import React from 'react'

function InputArea(props) {

  const [search, setsearch] = useState('')

  return (
    <div className="InputArea">
      <form>
          <input 
          value={search}
          onChange={(e)=>setsearch(e.target.value)}
          type="text"
          placeholder="Enter City..." 
          className="cityInput"
          />
        <button className='cityInputBtn' onClick={(e)=>props.onSubmit(e,search)}>Submit</button>
        </form>
    </div>
  )
}

export default InputArea