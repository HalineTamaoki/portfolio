import Header from '../components/portfolio/header/Header'
import About from '../components/portfolio/about/About'
import { Box } from '@mui/material'
import Project from '../components/portfolio/projects/Project'

export default function Portfolio() {
  return (
    <>
      <Header />
      <Box mt={8}>
        <About />
        <Project />
      </Box>
    </>
  )
}
