import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PortfolioTabs from './PortfolioTabs.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PortfolioTabs />
  </StrictMode>,
)
