import React from 'react'
import './style.css';
import { getTimeInPercentage } from '../lib/getTimeInPercentage.js'

function dateDiff(a, b) {
  return Math.floor(a - b);
}

const TimeStamp = (props) => {
  const timeStamps = [];
  const timeUnit = dateDiff(props.to, props.from) / props.numberOfTimeMarks;
  for (let i = 0; i < props.numberOfTimeMarks; i++) {
    let t = new Date(props.from.getTime() + (timeUnit * i))
    timeStamps.push({
      value: t,
      text: `${t.getHours()}:00`
    })
  }
  return (
    <div className="timeStampsWrapper">
      {timeStamps.map((time, index) =>
        <div
          className="timeStamp"
          key={`time ${index}`}
          style={{ left: `${getTimeInPercentage(time.value, props.from, props.to)}%` }}
        >
          {time.text}
        </div>)
      }
    </div>
  )
}

export default TimeStamp
