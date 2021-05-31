import { MdEuroSymbol } from 'react-icons/md'

const CardStat = ({ children }) => {
  return (
    <div className="inline-block text-xs my-6 mx-2 mt-0 w-full md:w-auto">
      <div className="flex items-center px-4 py-6 shadow-sm rounded-md bg-white md:h-24">
        {children}
      </div>
    </div>
  )
}

const CardStatIcon = ({ children }) => {
  return (
    <div className="p-2 rounded-full bg-blueTheme text-xs">
      {children}
    </div>

  )
}

const CardStatData = ({ children }) => {
  return (
    <div className="mx-5 ">{children}</div>
  )
}

const CardStatTitle = ({ children }) => {
  return (
    <div className='w-full'>
      <h4 className="text-lg font-semibold text-gray-700 inline-block">{children}</h4>
      <MdEuroSymbol className="h-6 w-6 text-blueTheme inline-block ml-4 -mt-3" />
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