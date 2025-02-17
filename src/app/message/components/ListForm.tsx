import { SmallButton } from '@/app/global/components/Buttons'
import { Select } from '@/app/global/components/FormComponents'
import { TableRows } from '@/app/global/components/Tables'
import { CommonType } from '@/app/global/types/StyledType'
import React from 'react'
import { MdCheckBoxOutlineBlank } from 'react-icons/md'
import styled from 'styled-components'

const StyledForm = styled.form<CommonType>`
  th:nth-of-type(1) {
    width: 40px;
  }

  th:nth-of-type(2) {
    width: 100px;
  }

  th:nth-of-type(3) {
    width: 120px;
  }

  th:nth-of-type(4) {
    width: 120px;
  }

  th:nth-of-type(5) {
    width: 60px;
  }

  th:nth-of-type(6) {
    width: 60px;
  }

  th:nth-of-type(8) {
    width: 260px;
  }
`
const status = [
  { value: 'READ', label: '읽은 메세지' },
  { value: 'UNREAD', label: '안읽은 메세지' },
]

const mode = [
  { value: 'RECEIVE', label: '받은 사람' },
  { value: 'SEND', label: '보낸 사람' },
]

const ListItem = ({ item, onModal }) => {
  const { subject, status, content, seq, senderEmail, receiverEmail, mode } = item
  console.log('item', item)

  return (
    <tr>
      <td>
        <MdCheckBoxOutlineBlank />
      </td>
      <td>{subject}</td>
      <td>{senderEmail}</td>
      <td>{receiverEmail}</td>
      <td>{mode==='RECEIVE' ? receiverEmail : senderEmail}</td>
      <td>{status === 'UNREAD' ? 'UNREAD' : 'READ'}</td>
      <td>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </td>
      <td>
        <a href={`/message/view/${seq}`}>
          <SmallButton type="button" color="primary" width={120}>
            조회
          </SmallButton>
        </a>
        <SmallButton
          type="button"
          color="dark"
          width={120}
          onClick={() => onModal(seq)}
        >
          삭제
        </SmallButton>
      </td>
    </tr>
  )
}

const ListForm = ({ form, onChange, onModal, items }) => {
  console.log('items', items)
  return (
    <>
      <StyledForm>
        <TableRows>
          <thead>
            <tr>
              <th>
                <MdCheckBoxOutlineBlank />
              </th>
              <th>제목</th>
              <th>보낸 사람 이메일</th>
              <th>받은 사람 이메일</th>
              <th>
                <Select
                  name="mode"
                  options={mode}
                  selected={form?.mode ?? 'SEND'}
                  onChange={onChange}
                  width={150}
                />
              </th>
              <th>
                <Select
                  name="status"
                  options={status}
                  selected={form?.status ?? 'UNREAD'}
                  onChange={onChange}
                  width={150}
                />
              </th>
              <th>내용</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items ? (
              items.map((item) => (
                <ListItem key={item?.seq} item={item} onModal={onModal} />
              ))
            ) : (
              <tr>
                <td colSpan={7} className="no-data">
                  쪽지가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </TableRows>
      </StyledForm>
    </>
  )
}

export default React.memo(ListForm)
