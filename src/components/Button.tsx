

interface ButtonProps {
  text: string;
  disabled?:boolean;
  children?: React.ReactNode
  full?: string;
}

export default function Button({ text, disabled, children }: ButtonProps){
  return (
    <button disabled={disabled}  className="bg-secondary-500 py-2 px-10 rounded text-white shadow-lg shadow-primary-500/70">
      {text}
      {children}
   </button>
  )
}