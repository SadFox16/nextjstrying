import Link from "next/link"

export const Header = () => {
  return (
    <header>
      <strong>header info</strong>
      <nav>
        <Link href="/">Home page</Link>
        <Link href="/about">About page</Link>
      </nav>
    </header>
  )
}

export default Header
