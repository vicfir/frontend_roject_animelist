import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import './globals.scss'
import { Providers } from '../redux/provider'


export const metadata = {
  title: 'AniList',
  description: 'Next generation anime platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-slate-200'>

        <Providers>
          <Navbar />

          {children}

          <Footer />
        </Providers>
        
      </body>
    </html>
  )
}
