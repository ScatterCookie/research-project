import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import WithoutMemoDemo from './App'
import App from './component/WithUseMemo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WithoutMemoDemo />
    <App />
  </StrictMode>,
)
