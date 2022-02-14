import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Home from '../components/Home/index.jsx'
import Navbar from '../components/Navigation'
import { Provider } from 'react-redux'
import store from '../redux/store'

export default function App() {
  return (
    <Provider store = {store}>
      <Home />
    </Provider>
  )
}
