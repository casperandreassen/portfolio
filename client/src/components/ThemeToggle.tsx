import '../styles/darkMode.css'
import { ChangeEventHandler } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

// 1
const setDark = () => {
  // 2
  localStorage.setItem('theme', 'dark')

  // 3
  document.documentElement.setAttribute('data-theme', 'dark')
}

const setLight = () => {
  localStorage.setItem('theme', 'light')
  document.documentElement.setAttribute('data-theme', 'light')
}

// 4
const storedTheme = localStorage.getItem('theme')

const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const defaultDark = storedTheme === 'dark' || (storedTheme === null && prefersDark)

if (defaultDark) {
  setDark()
}

// 5
const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
  if (e.target.checked) {
    setDark()
  } else {
    setLight()
  }
}

const ThemeToggle = () => {
  return (
    <div className='toggle-theme-wrapper'>
      <FontAwesomeIcon size='xl' icon={solid('sun')} />
      <label className='toggle-theme' htmlFor='checkbox'>
        <input type='checkbox' id='checkbox' onChange={toggleTheme} defaultChecked={defaultDark} />
        <div className='slider round'></div>
      </label>
      <FontAwesomeIcon size='xl' icon={solid('moon')} />
    </div>
  )
}

export default ThemeToggle
