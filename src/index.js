import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import {QueryClientProvider, QueryClient} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import {HelmetProvider} from 'react-helmet-async'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 60 * 1000, // 60 минут
      cacheTime: 1000 * 60 * 60 * 24, // 24 часа
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={client}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
