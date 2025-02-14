'use client'
import { useCallback } from 'react'
import { deleteFile } from '../services/action'

export default function useDelete(setFiles) {
  return useCallback(
    (seq) => {
      if (!window.confirm('정말 삭제하겠습니까?')) {
        return
      }
      ;(async () => {
        const deleted = await deleteFile(seq)
        console.log('deleted', deleted)
        if (deleted) {
          // 삭제성공
          setFiles((files) => files.filter((file) => file.seq !== seq))
        }
      })()
    },
    [setFiles],
  )
}
