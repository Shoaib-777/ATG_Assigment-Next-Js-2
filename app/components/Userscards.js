import Link from "next/link"
import { fetchUser } from "../utils/data"


const Userscards = async() => {
  const Data = await fetchUser()
  const isLoading = !Data.length

  if (isLoading) {return(
    <div className="card px-3 py-2 w-[300px] h-[330px] rounded-xl mx-auto mt-3 bg-gray-200 animate-pulse">
        <div className="flex flex-col px-1 py-2 gap-4 justify-center items-center">
            <div className="rounded-full w-[84px] h-[84px] bg-gray-300"></div>
            <div className="w-full text-center text-white flex flex-col gap-3">
                <div className="bg-gray-300 h-6 w-3/4 mx-auto rounded"></div>
                <div className="bg-gray-300 h-4 w-1/2 mx-auto rounded"></div>
                <div className="bg-gray-300 h-4 w-3/4 mx-auto rounded"></div>
            </div>
        </div>
        <div className="justify-center flex mt-[3rem]">
            <div className="bg-gray-300 h-10 w-32 rounded"></div>
        </div>
    </div>
  )}
  return (
    <>
    { Data.map((v,i)=>{return(
    <div key={i} className=" card px-3 py-2 w-[300px] h-[330px] rounded-xl mx-auto mt-3">
        <div className="flex flex-col px-1 py-2 gap-4 justify-center items-center">
            <div className=" rounded-full w-[84px] h-[84px]">
                <img src={v.avatar} alt="" className="w-20 h-20 rounded-full object-contain" />
            </div>
            <div className=" w-full text-center text-white flex flex-col gap-3">
                <h2 className="font-bold text-2xl "><span>{v.profile.firstName} </span><span> {v.profile.lastName}</span></h2>
                <h5 className="text-md font-semibold text-nowrap">{v.jobTitle}</h5>
                <div className=" text-nowrap tracking-tighter">
                <label className="">Email Id : </label><span>{v.profile.email}</span>
                </div>
            </div>
        </div>
        <div className=" justify-center flex  mt-[3rem]">
                <Link href={`/singleuser/${v.id}`}><button className="bg-green-600 hover:bg-green-800 px-5 py-2 rounded-lg font-bold text-white">View Profile</button></Link>
        </div>
    </div>
    )})
}
    </>
  )
}

export default Userscards