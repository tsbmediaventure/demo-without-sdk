import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {ApplicationWrapper}  from '../components/ApplicationWrapper'


export default function App({ Component, pageProps }: AppProps) {
 
  return (
    
      <ApplicationWrapper>
       <Component {...pageProps} />
    </ApplicationWrapper>
  
  
  ) 

}
  
 
