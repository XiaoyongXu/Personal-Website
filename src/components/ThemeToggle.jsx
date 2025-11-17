
import useTheme from '../hooks/useTheme'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggle = () => {
  const { theme, toggle } = useTheme()

  const title = theme === 'midnight' ? 'Midnight Indigo' : 'Clean Minimal'

  return (
    <button
      onClick={toggle}
      aria-label={`Switch theme (current: ${title})`}
      title={`Switch theme (current: ${title})`}
      className="p-2 rounded hover:bg-surface focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
    >
      {theme === 'midnight' ? (
        <FaSun className="text-yellow-300" />
      ) : (
        <FaMoon className="text-theme" />
      )}
    </button>
  )
}

export default ThemeToggle
