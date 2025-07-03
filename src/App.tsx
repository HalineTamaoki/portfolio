import { CssBaseline } from '@mui/material'
import './App.css'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/i18n'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import { CustomThemeProvider } from './context/ThemeContext'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <CustomThemeProvider>
          <CssBaseline/>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Portfolio />}/>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </BrowserRouter>
        </CustomThemeProvider>
      </I18nextProvider>
    </>
  )
}

export default App
