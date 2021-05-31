import { MdEuroSymbol } from 'react-icons/md'

const Table = ({ children }) => {
  return (
    <table className="min-w-full">
      {children}
    </table>
  )
}

const TableHead = ({ children }) => {
  return (
    <thead className='bg-blueTheme'>
      <tr>
        {children}
      </tr>
    </thead>
  )
}

const TableTh = ({ children }) => {
  return (
    <th className="px-6 py-3 border-b-4 border-gray-200 text-left text-xs leading-4 font-medium text-gray-200 uppercase tracking-wider">
      {children}
    </th>
  )
}

const TableBody = ({ children }) => {
  return (
    <tbody className="bg-white">
      {children}
    </tbody>
  )
}

const TableTr = ({ children }) => {
  return (
    <tr className='border-gray-200 hover:bg-gray-300'>
      {children}
    </tr>
  )
}

const TableTd = ({ children }) => {
  return (
    <td className="px-6 py-4 whitespace-no-wrap border-b">
      {children}
    </td>
  )
}

Table.Head = TableHead
Table.Th = TableTh
Table.Body = TableBody
Table.Tr = TableTr
Table.Td = TableTd

export default Table