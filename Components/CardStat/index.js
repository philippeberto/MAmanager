import { MdEuroSymbol } from 'react-icons/md'

const CardStat = ({ children }) => {
  return (
    <div className="inline-block float-right w-full text-sm my-6 mx-5 md:w-52 sm:mt-0">
      <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
        {children}
      </div>
    </div>
  )
}

const CardStatIcon = ({ children }) => {
  return (
    <div className="p-3 rounded-full bg-blueTheme">
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
      <h4 className="text-2xl font-semibold text-gray-700 inline-block">{children}</h4>
      <MdEuroSymbol className="h-6 w-6 text-blueTheme inline-block ml-8 -mt-3" />
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