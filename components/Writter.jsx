export const Writter = ({ className, text, setText }) => {
  return (
    <div className={`${className}`}>
      <textarea
        placeholder="escribe aquí"
        spellCheck="true"
        className="h-full w-full"
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </div>
  )
}