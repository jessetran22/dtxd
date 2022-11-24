import { Footer } from 'flowbite-react'
import { BsFacebook, BsInstagram } from 'react-icons/bs'

const MyFooter = () => {
  return (
    <Footer container={true} className="mt-auto h-fit">
      <div className="w-full">
        {/* <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand href="https://flowbite.com" src="/vite.svg" alt="Vite Logo" name="Tất Trần" />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div> */}
        {/* <Footer.Divider /> */}
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Brand href="https://flowbite.com" src="/vite.svg" alt="Vite Logo" name="Tất Trần" />
          <Footer.Copyright href="https://tattran.com/" by="Tất Trần" year={new Date().getFullYear()} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://www.facebook.com/TatTran22/" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com/tattran22/" icon={BsInstagram} />
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default MyFooter
