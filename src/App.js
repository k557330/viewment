import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [host, setHost] = useState()

  const getHost = async() => {
    const response = await axios.get('/api/host')
    setHost(response.data.host)
  }

  useEffect(() => {
    getHost()
  }, [])

  return <>{host}</>
}

export default App