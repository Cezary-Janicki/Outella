import '../styles/globals.css'
import {AppWrapper} from "../context/state"
import { dressIdContextWrapper} from "../context/state"
function app({ Component, pageProps }) {
  return( 
    <dressIdContextWrapper>
  <AppWrapper>
  <Component {...pageProps} />
  </AppWrapper>
  </dressIdContextWrapper>
  )
}

export default app
