import { Sidebar } from 'flowbite-react'
import MyFooter from './Footer'
import NavBar from './NavBar'
import { Link, useLocation, useParams } from 'react-router-dom'
import type { Location, Params } from 'react-router-dom'
import { useEffect } from 'react'

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

  useEffect(() => {
    console.log(location)
    console.log(params)
    console.log(path)
  }, [])

  const sidebarItems = [
    {
      title: 'Trang chủ',
      href: '/',
    },
    {
      title: 'Dự toán nhà phố',
      href: '/estimate',
    },
    {
      title: 'Tra khối lượng thép',
      href: '/steel-volume',
    },
    {
      title: 'Tra định mức xây dựng',
      href: '/construction-norms',
    },
    {
      title: 'Tính CP QLDA, CP tư vấn',
      href: '/project-costs',
    },
    {
      title: 'Văn bản về CP đầu tư XD',
      href: '/construction-docs',
    },
    {
      title: 'Giá vật liệu, nhân công',
      href: '/materia-price',
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
                      as={Link}
                      to={item.href}
                      className={`${path === item.href ? 'shadow-lg' : ''}  `}
                    >
                      {item.title}
                    </Sidebar.Item>
                  ))}

                  {/* <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
                    <Sidebar.Item href="#">Products</Sidebar.Item>
                  </Sidebar.Collapse> */}
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
