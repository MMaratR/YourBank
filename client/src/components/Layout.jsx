import React from 'react'
import { Header } from './Header.jsx'
import { Footer } from './Footer.jsx'


export const Layout = ({ children }) => {
  return <html lang='en'>
    <head>
      <meta charset='UTF-8'></meta>
      <meta name='viewport'></meta>
      <title>Home</title>
      <link rel='stylesheet' href='./index.css'></link>
    </head>

    <body class='image'>
      <React.Fragment>
        <Header />
        {children}
        <Footer />
      </React.Fragment>
    </body>
  </html>
}