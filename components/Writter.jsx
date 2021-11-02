export const Writter = ({ className, text, setText }) => {
  return (
    <div className={`${className}`}>
      <textarea
        placeholder="escribe aquí"
        spellCheck="true"
        className="h-96 w-full focus:outline-none bg-gray-100 rounded-sm p-3 dark:bg-gray-700"
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </div>
  )
}