import { useRouter } from 'next/router'
import { classNames } from '../utils'

export const NavLink = ({ children, href }) => {
  const router = useRouter()
  const isCurrent = router.asPath === href

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }
  return (
    <a
      href={href}
      onClick={handleClick}
      className={classNames(
        isCurrent
          ? 'bg-gray-900 text-white'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
        'px-3 py-2 rounded-md text-sm font-medium'
      )}
      aria-current={isCurrent ? 'page' : undefined}
    >
      {children}
    </a>
  )
}
