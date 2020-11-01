import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [host, setHost] = useState([])

  const getHost = async() => {
    const response = await axios.get('/api/test')
    console.log(response)
    setHost(response.data)
  }

  useEffect(() => {
    getHost()
  }, [])

  return <>{console.log(host)}</>
}

export default App