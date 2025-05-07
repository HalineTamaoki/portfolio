import { ReactNode } from 'react'
import {CustomThemeProvider} from '../../context/ThemeContext'
import { BrowserRouter } from 'react-router-dom'

export default function MockRender({children}: {children: ReactNode}) {
  return (
    <BrowserRouter>
      <CustomThemeProvider>
          {children}
      </CustomThemeProvider>
    </BrowserRouter>
  )
}
