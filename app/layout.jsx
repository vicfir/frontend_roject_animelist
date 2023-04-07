import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import './globals.scss'

export const metadata = {
  title: 'AniList',
  description: 'Next generation anime platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-slate-200'>

        <Navbar />

        {children}

        <Footer />
        
      </body>
    </html>
  )
}
