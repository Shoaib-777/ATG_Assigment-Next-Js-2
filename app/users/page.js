import Userscards from '../components/Userscards'
import ScrollTop from '../components/ScrollTop'

const Users = () => {
  return (
    <div className='mt-4 relative'>
        <div>
            <h3 className='font-bold card text-3xl text-center border-2 border-gray-200 px-2 py-2'>Users</h3>
        </div>
        <div className='px-4 flex flex-wrap'>
            <Userscards/>
        </div>
        <div className='block  md:hidden'>
          <ScrollTop/>
        </div>
    </div>
  )
}

export default Users