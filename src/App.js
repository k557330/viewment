import React from 'react'
import useSelectAll from './hooks/useSelectAll';

const App = () => {
  const [host, setHost] = useSelectAll("test");


  // useEffect(()=>setHost("test"), [setHost])

  return (
    <>
      {console.log("host :", host)}
      <div onClick={setHost}>API TEST</div>
    </>
  )
}

export default App