import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/UserContext'
import "./Home.css"

const Home = () => {
  const { user } = useContext(AuthContext)
  return (
    <section className='home-body'>
      <div className=''>
        <div className='container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900'>
          <h1 className='text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900'>
            Welcome To Abacus Academy
          </h1>
          <p className='mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900'>
          Get Premium Courses
          </p>
    {/* Carrousal */}
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

          <div className='flex flex-wrap justify-center'>
            {user && user.uid ? (
              <Link to='/courses'>
                <button
                  type='button'
                  className='px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 hover:bg-gray-700 text-gray-50'
                >
                  Explore  Courses
                </button>
              </Link>
            ) : (
              <>
                {' '}
                <Link to='/login'>
                  <button
                    type='button'
                    className='px-8 py-3 m-20 text-lg font-semibold rounded bg-gray-800 hover:bg-gray-700 text-gray-50'
                  >
                    Login
                  </button>
                </Link>
                <Link to='/register'>
                  <button
                    type='button'
                    className='px-8 py-3 my-20 text-lg border rounded border-gray-700 text-gray-900'
                  >
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
