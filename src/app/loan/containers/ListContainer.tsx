import React, { useState, useCallback, useEffect } from 'react'
import ListSearch from '../components/ListSearch'
import { toQueryString } from '@/app/global/libs/utils'
import useRequest from '@/app/global/hooks/useRequest'
import { BulletList } from 'react-content-loader'
import Pagination from '@/app/global/components/Pagination'
import ListItem from '../components/ListForm'

const Loading = () => <BulletList />

type SearchType = {
  sopt?: string
  skey?: string
  page?: number
  limit?: number

}

const ListSearchContainer = () => {
  const [search, setSearch] = useState<SearchType>({})
  const [_search, _setSearch] = useState<SearchType>({})
  const [items, setItems] = useState([])  
  const [pagination, setPagination] = useState<any>(null)

  const qs = toQueryString(search)

  const { data, error, isLoading } = useRequest(
    `/loan/api/list${qs.trim() ? '?' + qs : ''}`
  )

  const onChange = useCallback((e) => {
    const { name, value } = e.target
    _setSearch((_search) => ({ ..._search, [name]: value }))
  }, [])

  useEffect(() => {
    if (data && data.data) {
      setItems(data.data.items || [])  // items가 없으면 빈 배열을 설정
      setPagination(data.data.pagination)
    }
  }, [data])

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()

      setSearch({ ..._search })
    },
    [_search]
  )

  const onPageClick = useCallback((page) => {
    page = page ?? 1
    setSearch((search) => ({ ...search, page }))
  }, [])

  return (
    <>
      <ListSearch form={_search} onChange={onChange} onSubmit={onSubmit} />
      {isLoading ? <Loading /> : <ListItem items={items} />}
      {pagination && (
        <Pagination pagination={pagination} onClick={onPageClick} />
      )}
    </>
  )
}

export default React.memo(ListSearchContainer)