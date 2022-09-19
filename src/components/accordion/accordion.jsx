import { useState } from 'react'

import ActivityItem from '../activity-item'
import FormManager from '../form-manager'

import './accordion.scss'

const Accordion = ({ title, listActivities, setActivities }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedId, setSelectedId] = useState(null)

  const handleNewActivity = () => setIsOpen(true)

  const handleSubmit = (activity) => {
    const hasActivity = listActivities?.some((item) => item.id === activity.id)

    if (hasActivity) {
      const updatedList = listActivities.map((item) => {
        if (item.id === activity.id) {
          item.title = activity.title
        }
        return item
      })
      setActivities(updatedList)
      setIsOpen(false)
      setSelectedId(null)
      return
    }

    setActivities([...listActivities, activity])
    setIsOpen(false)
  }

  const handleEdit = (activityId) => {
    setIsOpen(true)
    setSelectedId(activityId)
  }

  const handleDelete = (activityId) => {
    const updatedList = listActivities.filter((item) => item.id !== activityId)
    setActivities(updatedList)
  }

  return (
    <>
      <details className="accordion">
        <summary className="accordion__header">
          <h3 className="accordion__title">{title}</h3>
          <button onClick={handleNewActivity} className="accordion__button">
            add
          </button>
        </summary>
        <section className="accordion__content">
          {listActivities.length != 0 ? (
            <ul>
              {listActivities.map((item) => {
                return (
                  <ActivityItem
                    key={item.id}
                    activity={item}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                )
              })}
            </ul>
          ) : (
            <p>No activity planned yet, add one?</p>
          )}
        </section>
      </details>
      <FormManager
        isOpen={isOpen}
        onSubmit={handleSubmit}
        activityId={selectedId}
      />
    </>
  )
}

export default Accordion
