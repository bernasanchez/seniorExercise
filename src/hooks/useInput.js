
import { useState } from 'react'

const useInput = () => {
  const [value, setValue] = useState("")

  const onChange = (event) => {
    setValue(event.target.value)
  }
  // return {value, onChange} //?CONSULTAR TEMA VALUE EN SINGUP 
  return { value: value, onChange: onChange } //*CONSULTAR ESTO COMO SE USA
}

export default useInput
