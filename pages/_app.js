import '../styles/globals.css'
import { useState } from 'react'
import Image from 'next/image'

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true)

  const loadingfunc = () => {
    setIsLoading(false)
  }

  setTimeout(loadingfunc, 1000)

  return isLoading === false ? (
    <Component {...pageProps} />
  ) : (
    <div className="loading-page">
      <Image
        src={'/loading.gif'}
        alt="loading_image"
        height={200}
        width={200}
        unoptimized
      />
    </div>
  )
}

export default MyApp
