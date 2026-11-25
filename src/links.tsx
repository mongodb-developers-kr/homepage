import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LinksPage } from '@pages/links/LinksPage'
import '@app/styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LinksPage />
  </StrictMode>,
)
