import './activity-item.scss'

const ActivityItem = ({ activity, handleEdit, handleDelete }) => {
  return (
    <li key={activity.id} className="activity-item">
      <p className="activity-item__title">{activity.title}</p>
      <nav className="activity-item__actions">
        <button
          className="activity-item__actions__button"
          onClick={() => handleEdit(activity.id)}
        >
          edit
        </button>
        <button
          className="activity-item__actions__button"
          onClick={() => handleDelete(activity.id)}
        >
          delete
        </button>
      </nav>
    </li>
  )
}

export default ActivityItem
