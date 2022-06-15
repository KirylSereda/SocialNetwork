import { ChangeEvent, useRef, useState } from "react"

export default {
  title: 'Input',
  // component: //input
}

export const UnconrolledInput = () => {
  return <input />
}

export const TrackValueUnconrolledInput = () => {
  const [value, setValue] = useState('')
  return <><input onChange={(e) => setValue(e.currentTarget.value)} />{value}</>

}

export const GetValueOfUnconrolledInputBybuttonPress = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const save = () => {
    const el = inputRef.current as HTMLInputElement
    setValue(el.value)
  }

  return <><input ref={inputRef} /><button onClick={save}> save </button>actual value -{value}</>

}

export const ConrolledInput = () => {
  const [parentValue, setParentValue] = useState('')
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value)
  }
  return <input value={parentValue} onChange={onChange} />
}

export const ConrilleCheckbox = () => {
  const [parentValue, setParentValue] = useState(false)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked)
  }
  return <input type='checkbox' checked={parentValue} onChange={onChange} />
}

export const ConrilleSelect = () => {
  const [parentValue, setParentValue] = useState<any>(null)
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value)
  }
  return <select value={parentValue} onChange={onChange}>
    <option>none</option>
    <option value={'1'}>Minsk</option>
    <option value={'2'}>Kiev</option>
    <option value={'3'}>Moscow</option>
  </select>
}

export const ControlledInputWitchFixedValue = () => <input value={'Hello'} />

