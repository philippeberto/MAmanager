const Input = ({
  name = '',
  placeholder = '',
  type = 'text',
  onChange = '',
  value = '',
  textHelp = null,
  errors = null,
}) => {
  return (
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={name}>
          {placeholder}
        </label>
        <input id={name}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
        {textHelp && <p className="text-gray-600 text-xs italic">{textHelp}</p>}
        {errors && <p className="text-red-500 text-xs italic">{errors}</p>}
      </div>
    </div>
  )
}

export default Input