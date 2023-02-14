import { fireEvent, render, screen } from '@testing-library/react'
import ThemeToggle from '../components/ThemeToggle'

describe('Themetoggle', () => {
  afterEach(() => {
    window.localStorage.clear()
  })

  test('It should be unchecked when theme=light is stored in localstorage', () => {
    window.localStorage.setItem('theme', 'light')
    render(<ThemeToggle />)
    const toggle = screen.getByTestId('themetoggle')
    expect(toggle).not.toBeChecked()
  })

  test('It should be checked when theme=dark is stored in localstorage', () => {
    window.localStorage.setItem('theme', 'dark')
    render(<ThemeToggle />)
    const toggle = screen.getByTestId('themetoggle')
    expect(toggle).toBeChecked()
  })

  test('It should change from light to dark in localstorage when switch is pressed', () => {
    window.localStorage.setItem('theme', 'light')
    render(<ThemeToggle />)
    const toggle = screen.getByTestId('themetoggle')
    fireEvent.click(toggle)
    expect(window.localStorage.getItem('theme')).toEqual('dark')
  })

  test('It should change from dark to light in localstorage when switch is pressed', () => {
    window.localStorage.setItem('theme', 'dark')
    render(<ThemeToggle />)
    const toggle = screen.getByTestId('themetoggle')
    fireEvent.click(toggle)
    expect(window.localStorage.getItem('theme')).toEqual('light')
  })

  test('It should set data-theme=dark in html when theme=dark is in localstorage', () => {
    window.localStorage.setItem('theme', 'dark')
    render(<ThemeToggle />)
    expect(document.documentElement.getAttribute('data-theme')).toEqual('dark')
  })

  test('It should set data-theme=light in html when theme=light is set in localstorage', () => {
    window.localStorage.setItem('theme', 'light')
    render(<ThemeToggle />)
    expect(document.documentElement.getAttribute('data-theme')).toEqual('light')
  })

  test('It should change data-theme in html when toggled from dark to light', () => {
    window.localStorage.setItem('theme', 'dark')
    render(<ThemeToggle />)
    const toggle = screen.getByTestId('themetoggle')
    fireEvent.click(toggle)
    expect(document.documentElement.getAttribute('data-theme')).toEqual('light')
  })

  test('It should change data-theme in html when toggled from light to dark', () => {
    window.localStorage.setItem('theme', 'light')
    render(<ThemeToggle />)
    const toggle = screen.getByTestId('themetoggle')
    fireEvent.click(toggle)
    expect(document.documentElement.getAttribute('data-theme')).toEqual('dark')
  })
})
