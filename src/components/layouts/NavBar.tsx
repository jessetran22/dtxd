import { Navbar, Button } from 'flowbite-react'

const NavBar = ({ className }: { className: string }) => {
  return (
    <Navbar fluid={true} rounded={true} className={`${className} h-fit`}>
      <Navbar.Brand href="/">
        <img src="/vite.svg" className="mr-3 h-6 sm:h-9" alt="Vite Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Dự Toán Xây Dựng</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Liên hệ</Button>
      </div>
    </Navbar>
  )
}

export default NavBar
