import { Sidebar } from 'flowbite-react'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import type { Location, Params } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { HiOutlineDocumentSearch } from 'react-icons/hi'
import { FaHome, FaCalculator, FaSearchengin, FaMoneyBillAlt } from 'react-icons/fa'
import { IoConstructSharp } from 'react-icons/io5'
import { SlCalculator } from 'react-icons/sl'
import MyFooter from './Footer'
import NavBar from './NavBar'

const getRoutePath = (location: Location, params: Params): string => {
  const { pathname } = location

  if (!Object.keys(params).length) {
    return pathname // we don't need to replace anything
  }

  let path = pathname
  Object.entries(params).forEach(([paramName, paramValue]) => {
    if (paramValue) {
      path = path.replace(paramValue, `:${paramName}`)
    }
  })
  return path
}

export default function Root({ children }: { children: JSX.Element }) {
  const location = useLocation()
  const params = useParams()
  const path = getRoutePath(location, params)

  const sidebarItems = [
    {
      title: 'Trang chủ',
      href: '/',
      icon: FaHome,
    },
    {
      title: 'Dự toán nhà phố',
      href: '/estimate',
      icon: FaCalculator,
    },
    {
      title: 'Tra khối lượng thép',
      href: '/steel-volume',
      icon: FaSearchengin,
    },
    {
      title: 'Tra định mức xây dựng',
      href: '/construction-norms',
      icon: IoConstructSharp,
    },
    {
      title: 'Tính CP QLDA, CP tư vấn',
      href: '/project-costs',
      icon: SlCalculator,
    },
    {
      title: 'Văn bản về CP đầu tư XD',
      href: '/construction-docs',
      icon: HiOutlineDocumentSearch,
    },
    {
      title: 'Giá vật liệu, nhân công',
      href: '/material-price',
      icon: FaMoneyBillAlt,
    },
  ]
  return (
    <>
      <div className="min-w-screen min-h-screen bg-blue-50 overflow-hidden relative flex flex-col">
        <NavBar className="flex-none" />
        <div className="w-full  flex-1 flex justify-center">
          <div className="container  flex flex-1">
            <Sidebar aria-label="Sidebar" className="rounded-sm shadow-lg bg-red-300">
              <Sidebar.Items className="">
                <Sidebar.ItemGroup className="">
                  {sidebarItems.map((item, index) => (
                    <Sidebar.Item
                      key={index}
                      href={item.href}
                      as={NavLink}
                      to={item.href}
                      icon={item.icon}
                      className={`${path === item.href ? 'shadow-lg bg-gray-100' : ''}  `}
                    >
                      {item.title}
                      {path === item.href && (
                        <Helmet>
                          <title>{item.title}</title>
                          {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
                        </Helmet>
                      )}
                    </Sidebar.Item>
                  ))}
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </Sidebar>
            <div className="mr-2 flex-1 justify-center flex items-center bg-gray-50">{children}</div>
          </div>
        </div>
        <MyFooter />
      </div>
    </>
  )
}
