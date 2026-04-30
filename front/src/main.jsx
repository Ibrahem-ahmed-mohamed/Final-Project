import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router/dom'
import router from './routes/routs.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google";
import { StrictMode } from 'react'
createRoot(document.getElementById('root')).render(
    <>
    <StrictMode>
        <GoogleOAuthProvider clientId="406954923430-l8un7vfpsi1c5b2im7f4gn29mr5rhg5h.apps.googleusercontent.com">
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
    </GoogleOAuthProvider>
    </StrictMode>
    </>
)
