
//components
import MainLayout from '../layouts'

//styles
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  
  return (
    <>
  <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
    </>
  )
}


export default MyApp
