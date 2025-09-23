import { Header } from '../components/header/Header'
import { About } from '../components/about/About'
import { Box } from '@mui/material'
import { Project } from '../components/projects/Project'
import { Contact } from '../components/contact/Contact'

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
