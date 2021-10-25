import { Thread } from "./twitter/Thread"

export const Preview = ({ className }) => {
  return (
    <div className={`${className} overflow-auto`} style={{maxHeight: '90vh'}}>
      <h1 className="text-center text-2xl">Vista previa</h1>
      <Thread /> 
    </div>
  )
}
