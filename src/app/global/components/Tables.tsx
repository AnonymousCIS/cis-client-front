import styled from 'styled-components'

import colors from '../styles/colors'

const { secondary, info } = colors

export const TableCols = styled.table`
  border-spacing: 0;
  width: 100%;

  th {
    background: #e6e6e6;
    padding: 10px 20px;
    border-bottom: 1px solid ${info};
    text-align: left;
  }

  td {
    padding: 10px;
    border-bottom: 1px solid ${info};
  }

  tr:first-of-type {
    th,
    td {
      border-top: 1px solid ${info};
    }
  }

  & + & {
    margin-top: 30px;
  }
`

export const TableRows = styled.table`
  border-spacing: 0;
  width: 100%;
  thead {
    th {
      background: ${secondary};
      color: #fff;
      padding: 10px;
      font-size: 1.15rem;
    }
    th + th {
      border-left: 1px solid #f8f8f8;
    }
  }

  tbody {
    td {
      border-bottom: 1px solid #ccc;
      padding: 10px;
    }

    td + td {
      border-left: 1px solid ${secondary};
    }

    tr:nth-of-type(2n) {
      td {
        background: #f8f8f8;
      }
    }
  }

  .no-data {
    padding: 150px 0;
    text-align: center;
    font-size: 1.15rem;
  }

  & + & {
    margin-top: 30px;
  }
`
