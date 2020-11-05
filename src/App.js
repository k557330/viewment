import React from 'react'
import useSelectAll from './hooks/useSelectAll';

const App = () => {
  const [test, setTest] = useSelectAll("test");


  // useEffect(()=>setHost("test"), [setHost])

  return (
    <>
      {console.log(test)}
      <div onClick={setTest}>API TEST</div>
    </>
  )
}

export default App