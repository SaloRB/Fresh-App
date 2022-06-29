// routes/countdown.tsx

/** @jsx h */
import { h } from 'preact'
import Countdown from '../islands/Countdown.tsx'

export default function Page() {
  const date = new Date()
  date.setSeconds(date.getSeconds() + 3)

  return (
    <p>
      The big event is happening <Countdown target={date.toISOString()} />
    </p>
  )
}
