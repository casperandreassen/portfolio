import TextField from '@mui/material/TextField'
import { useEffect, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import '../styles/home.css'
import { ReactSVG } from 'react-svg'
import useWindowDimensions from '../hooks/useWindowDementions'

const Home = () => {
  const [theme, setTheme] = useState<string | null>()
  const { width, height } = useWindowDimensions()

  document.documentElement.addEventListener('change', () => {
    setTheme(document.documentElement.getAttribute('data-theme') || 'light')
  })

  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-theme'))
  }, [])

  const darkTheme = createTheme({
    palette: {
      mode: theme === 'dark' ? 'dark' : 'light',
    },
  })

  return (
    <div className='homeWrapper'>
      <ReactSVG
        src='/1000.svg'
        className='backgroundArt'
        wrapper='span'
        beforeInjection={(svg) => {
          svg.setAttribute('style', `width: ${width - 200}px; height: ${height - 60}px;`)
          svg.setAttribute('viewbox', `0 0 ${width - 200} ${height - 60}`)
        }}
      />

      <div className='bio'>
        <img src='/profile.jpeg' className='profilePicture' alt='profile_picture' />
        <h1>Bio</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices eros nibh,
          et aliquet dui ullamcorper vitae. Quisque dolor lacus, vulputate eget rhoncus at, vehicula
          id nisi. Cras in bibendum lectus.
        </p>
      </div>
      <div className='education'>
        <h1>Education</h1>
        <div className='educationContainer'>
          <div className='institutionYear'>
            <p className='institution'>NTNU</p>
            <p>2021-2023</p>
          </div>
          <span className='educationDivider'></span>
          <p>B.Sc Informatics</p>
        </div>
        <div className='educationContainer'>
          <div className='institutionYear'>
            <p className='institution'>HINN</p>
            <p>2018-2020</p>
          </div>
          <span className='educationDivider'></span>
          <p>Serviceledelse og markedsføring</p>
        </div>
      </div>
      <ThemeProvider theme={darkTheme}>
        <div className='contactWrapper'>
          <div className='contactContainer'>
            <h1>Contact me!</h1>
            <div className='inputContainer'>
              <TextField id='outlined-basic' label='From email' variant='outlined' />
              <TextField id='outlined-basic' label='Subject' variant='outlined' />
              <TextField id='outlined-basic' label='Body' variant='outlined' multiline={true} />
            </div>
            <button className='button contactButton'>Send</button>
          </div>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default Home
