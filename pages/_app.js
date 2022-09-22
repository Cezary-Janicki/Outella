import '../styles/globals.css'
import {AppWrapper} from "../context/state"
import { dressIdContextWrapper} from "../context/state"
function app({ Component, pageProps }) {
  return( 
  <AppWrapper>
  <Component {...pageProps} />
  </AppWrapper>
  )
}

export default app
