import React, {
  useState,
  useCallback,
  useActionState,
} from 'react'
import { WriteMessage } from '../services/actions'
import WriteForm from '../components/WriteForm'
import { useSearchParams } from 'next/navigation'

const WriteContainer = () => {
  const [data, setData] = useState<any>({})

  const searchParams = useSearchParams()
  const params = {redirectUrl: searchParams.get('redirectUrl')}
  const actionState = useActionState(WriteMessage, params)


  const onChange = useCallback((e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }))
  }, [])


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
