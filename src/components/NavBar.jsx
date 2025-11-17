
import ThemeToggle from './ThemeToggle'

const NavBar = () => {
  return (
    <header className="bg-surface sticky top-0 z-30 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <a href="#home" className="text-lg md:text-xl font-bold tracking-tight">Xiaoyong (Tony) Xu</a>
        <nav>
          <ul className="flex gap-4 md:gap-6 items-center text-sm md:text-base">
            <li><a className="text-theme hover:text-primary" href="#home">Home</a></li>
            <li><a className="text-theme hover:text-primary" href="#experience">Experience</a></li>
            <li><a className="text-theme hover:text-primary" href="#projects">Projects</a></li>
            <li><a className="text-theme hover:text-primary" href="#about">About</a></li>
            <li><a className="text-theme hover:text-primary" href="#contact">Contact</a></li>
            <li className="flex items-center">
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default NavBar
