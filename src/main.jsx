import { Provider } from "react-redux"
import { createRoot } from 'react-dom/client'
import {Store} from "./store/appStore.js"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <App />
  </Provider>
)
