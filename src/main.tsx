import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SelectedTechsProvider } from './contexts/selected-techs/selected-techs.context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <SelectedTechsProvider>
        <App />
      </SelectedTechsProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
