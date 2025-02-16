'use client'
import React, { useState, useCallback, useEffect } from 'react'
import ListSearch from '../components/ListSearch'
import { toQueryString } from '@/app/global/libs/utils'
import useRequest from '@/app/global/hooks/useRequest'
import { BulletList } from 'react-content-loader'
import Pagination from '@/app/global/components/Pagination'
import ListItem from '../components/ListForm'

const Loading = () => <BulletList />

type SearchType = {

  skey?: string
  page?: number
  limit?: number

}

const ListSearchContainer = () => {
  const [search, setSearch] = useState<SearchType>({})
  const [_search, _setSearch] = useState<SearchType>({})
  const [items, setItems] = useState([])
  const [pagination, setPagination] = useState()

  const qs = toQueryString(search)
  console.log('쿼리:', qs); 

  const { data, error, isLoading } = useRequest(
    `/card/api/list${qs.trim() ? '?' + qs : ''}`
  )

  const onChange = useCallback((e) => {
    const { name, value } = e.target
    _setSearch((_search) => ({ ..._search, [name]: value }))
  }, [])

  const onClick = useCallback((field, value) => {
    _setSearch((_search) => ({ ..._search, [field]: value }))
  }, [])

  useEffect(() => {
    if (data) {
      console.log('데이터:', data);
      if (data.data) {
        setItems(data.data.data || []);
        setPagination(data.data.pagination || {});
      }
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
    console.log('페이지:', page);  
    page = page ?? 1
    setSearch((search) => ({ ...search, page }))
  }, [])

  return (
    <>
      <ListSearch     
        form={_search}
        onChange={onChange}
        onSubmit={onSubmit}
        onClick={onClick} />
      {isLoading ? <Loading /> : <ListItem items={items} />}
      {pagination && (
        <Pagination pagination={pagination} onClick={onPageClick} />
      )}
    </>
  )
}

export default React.memo(ListSearchContainer)