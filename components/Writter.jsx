export const Writter = ({ className, text, setText }) => {
  return (
    <div className={`${className}`}>
      <textarea
        placeholder="escribe aquí"
        spellCheck="true"
        className="h-full w-full focus:outline-none bg-gray-200 rounded-sm p-3"
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </div>
  )
}