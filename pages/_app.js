import '../styles/globals.css'
import {AppWrapper} from "../context/state"
import { DressIdContextWrapper } from '../context/getDressId'
import { QueryClientProvider ,QueryClient} from 'react-query'

// const queryClient = new QueryClient()
function app({ Component, pageProps }) {
  return( 
  // <QueryClientProvider client={queryClient}>
  <DressIdContextWrapper> 
  <AppWrapper>
  <Component {...pageProps} />
  </AppWrapper>
  </DressIdContextWrapper>
  // </QueryClientProvider>
  )
}

export default app
