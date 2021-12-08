//styles
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

//components
import MainLayout from '../layouts/MainLayout'

function MyApp({ Component, pageProps }) {
  
  return (
  <div className="bg-red-200 min-h-screen w-screen relative">
  <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
  </div>
    
  )
}

export default MyApp
