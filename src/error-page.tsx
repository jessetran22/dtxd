import { useRouteError } from 'react-router-dom'
import { Link } from 'react-router-dom'
import errorImage from '@/assets/404.svg'

export default function ErrorPage() {
  const error = useRouteError()
  // console.error(error)

  return (
    <div className="min-w-screen min-h-screen bg-blue-50 overflow-hidden relative grid">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="max-w-md">
          <div className="text-5xl font-dark font-bold">404</div>
          <p className="text-2xl md:text-3xl font-light leading-normal my-4">
            Rất tiếc, chúng tôi không thể tìm thấy trang này.
          </p>
          <p className="mb-8">Nhưng đừng lo, bạn có thể tìm thấy nhiều thứ khác trên trang chủ của chúng tôi.</p>
          <Link to="/">
            <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
              Trang chủ
            </button>
          </Link>
        </div>
        <div className="max-w-lg">
          <img src={errorImage} alt="404 Not found" />
        </div>
      </div>
    </div>
  )
}
