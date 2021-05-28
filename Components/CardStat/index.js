import { MdEuroSymbol } from 'react-icons/md'

const CardStat = ({ children }) => {
  return (
    <div className="inline-block w-full my-6 px-6 sm:w-1/2 lg:w-1/3 sm:mt-0">
      <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
        {children}
      </div>
    </div>
  )
}

const CardStatIcon = ({ children }) => {
  return (
    <div className="p-3 rounded-full bg-red-900 bg-opacity-90">
      {children}
    </div>

  )
}

const CardStatData = ({ children }) => {
  return (
    <div className="mx-5">{children}</div>
  )
}

const CardStatTitle = ({ children }) => {
  return (
    <div className='w-full'>
      <h4 className="text-2xl font-semibold text-gray-700 inline-block">{children}</h4>
      <MdEuroSymbol className="h-8 w-8 text-red-900 inline-block ml-8 -mt-3" />
    </div>
  )
}

const CardStatDescription = ({ children }) => {
  return (
    <div className="text-gray-500">{children}</div>

  )
}

CardStat.Icon = CardStatIcon
CardStat.Data = CardStatData
CardStat.Title = CardStatTitle
CardStat.Description = CardStatDescription


export default CardStat