import { render, screen } from '@testing-library/react'
import NavBar from '../components/NavBar'
import { MemoryRouter } from 'react-router-dom'

// Test that nav links are working as expected.

const renderNav = (route: string) => {
  render(
    <MemoryRouter initialEntries={[route]}>
      <NavBar />
    </MemoryRouter>,
  )
  const homeElement = screen.getByTestId('navLinkHome')
  const projectElement = screen.getByTestId('navLinkProjects')
  const contactElement = screen.getByTestId('navLinkContact')
  return { homeElement, projectElement, contactElement }
}

test('Should only render HOME as selected link when path is /', () => {
  const { homeElement, projectElement, contactElement } = renderNav('/')
  expect(homeElement).toHaveClass('selectedNavLink')
  expect(projectElement).toHaveClass('unSelectedNavLink')
  expect(contactElement).toHaveClass('unSelectedNavLink')
})

test('Should only render PROJECTS as selected link when path is /projects', () => {
  const { homeElement, projectElement, contactElement } = renderNav('/projects')
  expect(homeElement).toHaveClass('unSelectedNavLink')
  expect(projectElement).toHaveClass('selectedNavLink')
  expect(contactElement).toHaveClass('unSelectedNavLink')
})

test('Should only render CONTACT as selected link when path is /contact', () => {
  const { homeElement, projectElement, contactElement } = renderNav('/contact')
  expect(homeElement).toHaveClass('unSelectedNavLink')
  expect(projectElement).toHaveClass('unSelectedNavLink')
  expect(contactElement).toHaveClass('selectedNavLink')
})
