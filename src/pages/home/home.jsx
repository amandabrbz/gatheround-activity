import Accordion from '../../components/accordion'
import { useState } from 'react'
import './home.scss'

function Home() {
  const [activities, setActivities] = useState([])

  return (
    <section className="home">
      <Accordion
        title="Appeciation at Work"
        listActivities={activities}
        setActivities={setActivities}
      />
    </section>
  )
}

export default Home
