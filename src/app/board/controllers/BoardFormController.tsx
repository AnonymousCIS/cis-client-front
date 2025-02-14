'use client'

import React, {
  useState,
  useLayoutEffect,
  useCallback,
  useActionState,
} from 'react'
import { getBoard, get, updateBoard } from '../services/actions'
import useSkin from '../hooks/useSkin'
import useMainTitle from '@/app/global/hooks/useMainTitle'
import { notFound } from 'next/navigation'
import useUser from '@/app/global/hooks/useUser'

type Props = {
  bid?: string
  seq?: number
}

// seq가 넘어오면 수정, bid는 항상 필수
const BoardFormController = ({ bid, seq }: Props) => {
  const { isLogin, userInfo } = useUser()

  const [board, setBoard] = useState<any>()

  // 게시글
  const [data, setData] = useState<any>({
    mode: seq ? 'edit' : 'write',
    gid: '' + Date.now(),
    poster: !seq && isLogin ? userInfo.name : '',
  })

  const [, setTitle] = useMainTitle()
  const onChange = useCallback((e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }))
  }, [])
  const onEditorChange = useCallback(
    (content) => setData((data) => ({ ...data, content })),
    [],
  )
  const actionState = useActionState(updateBoard, undefined)

  const onClick = useCallback((field, value) => {
    setData((data) => ({ ...data, [field]: value }))
  }, [])

  // 게시글 수정시
  useLayoutEffect(() => {
    ;(async () => {
      if (seq) {
        const _data = await get(seq)
        if (!_data && !_data.config) {
          return
        }
        _data.mode = 'edit'

        setData(_data)
        setBoard(_data.config)
      }
    })()
  }, [seq])

  // 게시글 등록시
  useLayoutEffect(() => {
    ;(async () => {
      if (bid) {
        try {
          const _board = await getBoard(bid)
          if (!_board) {
            return
          }
          const title = _board.name
          setTitle(title)
          setBoard(_board)
        } catch (err) {
          console.error(err)
        }
      }
    })()
  }, [bid, setTitle])

  if ((bid && !board) || (seq && !data)) notFound()

  const Form = useSkin(board?.skin, 'form')

  return (
    Form && (
      <Form
        board={board}
        data={data}
        onEditorChange={onEditorChange}
        onChange={onChange}
        onClick={onClick}
        actionState={actionState}
      />
    )
  )
}

export default React.memo(BoardFormController)
