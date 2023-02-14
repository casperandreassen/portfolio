import '../styles/darkMode.css'
import { ChangeEventHandler, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const ThemeToggle = () => {
  const setDark = () => {
    window.localStorage.setItem('theme', 'dark')
    document.documentElement.setAttribute('data-theme', 'dark')
  }

  const setLight = () => {
    window.localStorage.setItem('theme', 'light')
    document.documentElement.setAttribute('data-theme', 'light')
  }

  const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.checked) {
      setDark()
    } else {
      setLight()
    }
  }

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme')
    if (storedTheme === 'dark') {
      setDark()
    } else {
      setLight()
    }
  })

  return (
    <div className='toggle-theme-wrapper'>
      <FontAwesomeIcon size='xl' icon={solid('sun')} />
      <label className='toggle-theme' htmlFor='checkbox'>
        <input
          data-testid='themetoggle'
          type='checkbox'
          id='checkbox'
          onChange={toggleTheme}
          defaultChecked={window.localStorage.getItem('theme') == 'dark'}
        />
        <div className='slider round'></div>
      </label>
      <FontAwesomeIcon size='xl' icon={solid('moon')} />
    </div>
  )
}

export default ThemeToggle
