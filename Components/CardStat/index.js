const CardStat = ({ children }) => {
  return (
    <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
      {children}
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
    <h4 className="text-2xl font-semibold text-gray-700">{children}</h4>

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