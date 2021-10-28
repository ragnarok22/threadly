import { CalendarIcon, PencilIcon, PresentationChartBarIcon } from "@heroicons/react/outline"

export const navigation = [
  { name: 'Compone', href: '/', icon: <PencilIcon className="h-4 w-4 mr-1" /> },
  { name: 'En cola', href: '/queue', icon: <CalendarIcon className="h-4 w-4 mr-1" /> },
  { name: 'Estadísticas (pronto)', href: '#', icon: <PresentationChartBarIcon className="h-4 w-4 mr-1" /> },
]

export const userNavigation = [
  { id: 'settings', name: 'Settings', href: '#' },
  { id: 'sign-out', name: 'Sign out', href: '#' },
]
