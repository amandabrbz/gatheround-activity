import { useState, useRef, useEffect } from 'react'
import './form-manager.scss'

const FormManager = ({ isOpen, onSubmit, activityId }) => {
  const id = Math.floor(Math.random() * 1000)
  const input = useRef(null)
  const [title, setTitle] = useState('')

  useEffect(() => {
    if (isOpen) {
      input.current.focus()
    }
  }, [isOpen])

  const handleSubmit = (e) => {
    e.preventDefault()

    onSubmit({ id: activityId ?? id, title })
    setTitle('')
  }

  return (
    <form
      className={isOpen ? 'form open' : 'form'}
      onSubmit={handleSubmit}
      aria-hidden={isOpen}
    >
      <label htmlFor="title" className="form__label">
        title for the activity
      </label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        ref={input}
        className="form__input"
      />
      <button type="submit" className="form__button">
        save
      </button>
    </form>
  )
}

export default FormManager
