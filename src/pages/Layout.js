import React from 'react'
import { Container, CssBaseline, ThemeProvider } from '@mui/material'
import theme from '../theme'
import { CookiesProvider } from 'react-cookie'
import { Slide, ToastContainer } from 'material-react-toastify'

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CookiesProvider>
        <Container component="main" maxWidth="sm">
          <CssBaseline/>
          { children }
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Slide}
          />
        </Container>
      </CookiesProvider>
    </ThemeProvider>
  )
}

export default Layout
