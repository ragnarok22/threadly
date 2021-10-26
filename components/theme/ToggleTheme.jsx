import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { useTheme } from 'next-themes'

export const ToggleTheme = ({ isAbsolute = false }) => {
  const { theme, setTheme } = useTheme()
  
  const changeTheme = (e) => {
    // e.preventDefault();
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }
  
  return (
    <div className={`flex items-center justify-center bottom-3 right-3 ${isAbsolute && 'absolute'}`}>
      <label htmlFor="toggleB" className="flex items-center cursor-pointer">
        <div className="relative">
          <input type="checkbox" id="toggleB" className="sr-only" onClick={changeTheme}/>
          <div className="block bg-white dark:bg-gray-600 w-14 h-8 rounded-full"/>
          <MoonIcon className="dot invisible dark:visible text-gray-100 absolute left-1 top-1 w-6 h-6 transition"/>
          <SunIcon className="dot visible right-0 dark:invisible text-gray-600 absolute left-1 top-1 w-6 h-6 transition"/>
        </div>
      </label>
    </div>
  )
}
