import React, {
  useState,
  useCallback,
  useActionState,
  useLayoutEffect,
} from 'react'
import { WriteMessage } from '../services/actions'
import WriteForm from '../components/WriteForm'

type Props = {
  seq: number
}
const WriteContainer = ({ seq }: Props) => {
  const [data, setData] = useState<any>({})

  const onChange = useCallback((e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }))
  }, [])

  const actionState = useActionState(WriteMessage, undefined)

  const onClick = useCallback((field, value) => {
    setData((data) => ({ ...data, [field]: value }))
  }, [])
  console.log('data', data)
  return (
    <WriteForm
      data={data}
      onChange={onChange}
      onClick={onClick}
      actionState={actionState}
    />
  )
}

export default React.memo(WriteContainer)
