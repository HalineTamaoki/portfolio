import { Header } from '../components/portfolio/header/Header'
import { About } from '../components/portfolio/about/About'
import { Box } from '@mui/material'
import { Project } from '../components/portfolio/projects/Project'
import { Contact } from '../components/portfolio/contact/Contact'

export default function Portfolio() {
  return (
    <>
      <Header />
      <Box mt={2}>
        <About />
        <Project />
        <Contact />
      </Box>
    </>
  )
}
