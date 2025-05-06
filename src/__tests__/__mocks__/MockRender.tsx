import { ReactNode } from 'react'
import {CustomThemeProvider} from '../../context/ThemeContext'

export default function MockRender({children}: {children: ReactNode}) {
  return (
    <CustomThemeProvider>
        {children}
    </CustomThemeProvider>
  )
}
