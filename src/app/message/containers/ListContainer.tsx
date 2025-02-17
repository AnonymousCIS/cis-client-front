'use client'
import { List } from 'react-content-loader'
import React, { useCallback, useEffect, useState } from 'react'
import { toQueryString } from '@/app/global/libs/utils'
import useRequest from '@/app/global/hooks/useRequest'
import Pagination from '@/app/global/components/Pagination'
import ListForm from '../components/ListForm'
import Search from '../components/Search'
import LayerPopup from '@/app/global/components/LayerPopup'
import DeleteContainer from './DeleteContainer'
import useQueryString from '@/app/global/hooks/useQueryString'

const Loading = () => <List />

type SearchType = {
  sopt?: string
  skey?: string
  page?: number
  limit?: number
  status?: 'UNREAD' | 'READ'
  mode?: 'receive' | 'send'
}

const ListContainer = () => {
  const [search, setSearch] = useState<SearchType>({})

  const _qs = useQueryString(['skey', 'status', 'mode'])
  
  // 임시값
  const [_search, _setSearch] = useState<SearchType>({})

  const [items, setItems] = useState([])

  const [pagination, setPagination] = useState()

  const [isOpen, setIsOpen] = useState(false)
  const [seq, setSeq] = useState(null)

  const qs = toQueryString(search)

  const { data, error, isLoading } = useRequest(
    `/message/api/list${qs.trim() ? '?' + qs : ''}`,
  )

  const onChange = useCallback((e) => {
    _setSearch((_search) => ({ ..._search, [e.target.name]: e.target.value }))
  }, [])

  useEffect(() => {
    if (data) {
      setItems(data.data.items)
      console.log('data', data)
      setPagination(data.data.pagination)
    }
  }, [data])

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()
      setSearch({ ..._search })
    },
    [_search],
  )

  const onModal = useCallback((seq) => {
    setIsOpen(true)
    setSeq(seq)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
    setSeq(null)
  }, [])

  const onPageClick = useCallback((page) => {
    page = page ?? 1
    setSearch((search) => ({ ...search, page }))
  }, [])

  /**
   * Set을 이용해 중복 제거 & 값을 토글 형태로 받는 공통 함수
   *
   * 입력하는 값 & 필드명(type)
   */
  const addToggle = useCallback(
    (value, type) => {
      const set = new Set(_search[type] ?? [])
      if (set.has(value)) {
        set.delete(value)
      } else {
        set.add(value)
      }
      _setSearch({ ..._search, [type]: [...set.values()] })
    },
    [_search],
  )
  
  const onClick = useCallback(
    (field, value) => {
      if (['skey', 'status', 'mode'].includes(field)) {
        // addToggle(value, field)
        _setSearch((_search) => ({ ..._search, [field]: value }))
      } else {
        _setSearch((_search) => ({ ..._search, [field]: value }))
      }
    },
    [addToggle],
  )

  return (
    <>
      <div className="layout-width">
        <Search form={_search} onChange={onChange} onSubmit={onSubmit} onClick={onClick} />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="layout-width">
          <ListForm
            items={items}
            onChange={onChange}
            onModal={onModal}
            form={_search}
          />
        </div>
      )}
      {pagination && (
        <Pagination pagination={pagination} onClick={onPageClick} />
      )}
      <LayerPopup
      isOpen={isOpen}
      onClose={closeModal}
      title='쪽지 삭제'
      width={750}
      height={600}
      >
        <DeleteContainer seq={seq} closeModal={closeModal} />
      </LayerPopup>
    </>
  )
}

export default React.memo(ListContainer)
