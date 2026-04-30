import { Link } from 'react-router'

export default function Error() {
  return (
    <div className='w-full px-33.75 pt-20 pb-35'>
      {/* location */}
      <div className='flex gap-3'>
        <Link className='texgray' to={"/home"}>Home</Link>
        <span className='texgray'>/</span>
        <Link to={"/error"}>404Error</Link>
      </div>
      {/* error */}
      <div className=' mt-35 w-full flex flex-col gap-10 justify-center items-center'>
        <p className=' font-medium sm:text-5xl lg:text-[110px]'>404 Not Found</p>
        <p>Your visited page not found. you may go home page</p>
              <Link to={"/home"}
                className="text-white  bgred   box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-sm text-sm px-12 py-4  focus:outline-none"
              >
                Back to home page
              </Link>
      </div>
    </div>
  )
}















