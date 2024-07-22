'use client'
import axios from "axios";
import Link from "next/link";
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react";

const SingleUser = () => {
    const pathname = usePathname();
    const paths = pathname.split('/');
    const id = paths[paths.length - 1];
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${id}`);
                setData(res.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return (
            <div className='px-4 card mx-4 mt-2 rounded-xl'>
               <h2 className='text-center font-bold text-2xl text-yellow-300 py-2 px-4'>
                    <div className='animate-pulse bg-gray-300 h-6 w-1/4 mx-auto rounded'></div>
                </h2>
                <div className='flex flex-col md:flex-row py-2 gap-1'>
                    <div className='border border-white rounded-l-xl px-2 md:px-4 flex flex-col gap-2 md:gap-4 md:pb-6'>
                        <div className='w-[300px] h-[400px] bg-gray-300 rounded mx-auto animate-pulse'></div>
                        <div className='bg-gray-300 h-6 w-3/4 mx-auto mt-4 animate-pulse rounded'></div>
                        <div className='bg-gray-300 h-4 w-1/2 mx-auto mt-2 animate-pulse rounded'></div>
                        <div className='bg-gray-300 h-4 w-1/2 mx-auto mt-2 animate-pulse rounded'></div>
                    </div>
                    <div className='border-2 border-black rounded-r-xl flex flex-col justify-between w-full min-h-[500px] md:min-h-max px-4 md:px-8'>
                        <div className='bg-gray-300 h-6 w-1/2 mx-auto mt-4 animate-pulse rounded'></div>
                        <div className='bg-gray-300 h-4 w-full mt-4 animate-pulse rounded'></div>
                        <div className='bg-gray-300 h-4 w-1/2 mx-auto mt-4 animate-pulse rounded'></div>
                    </div>
                </div>
            </div>
        );
    }
    if (error) return <p>Error: {error.message}</p>;
    if (!data) return <p>No Data Found.</p>;

    return (
        <div className='px-4 card mx-3 mt-2 rounded-xl mb-4 h-[120vh] sm:h-[100vh] border border-black'>
             <div className="relative pt-[4rem] sm:pt-0">

             <Link href={'/'}><img src="/back.png" alt="" className="absolute top-[70px] sm:top-2 left-7 bg-white rounded-full object-contain border border-black  w-10 h-10"  /></Link><h2 className='text-center  font-bold text-2xl text-yellow-300 py-2 px-4'>User Profile</h2>
             </div>

            <div className='flex  py-2 gap-1 mt-[8rem] sm:mt-[2rem]'>
                <div className='border border-white rounded-l-xl px-2 md:px-4 flex flex-col gap-2 md:gap-4 md:pb-6'>
                    <img src={data.avatar} alt="" className=' w-[300px] h-[400px] object-contain mx-auto' />
                </div>
                <div className='border-2 border-black rounded-r-xl flex flex-col justify-between w-full min-h-[500px] md:min-h-max px-4 md:px-8'>
                    <span className='font-bold text-xl md:text-2xl text-yellow-400'>
                        <h2>
                            <span className="block text-black">Name: </span>
                            <span>{data.profile.firstName} </span>
                            <span>{data.profile.lastName}</span>
                        </h2>
                    </span>
                    <h4 className='font-semibold text-[18px] md:text-xl'>
                        <label className='text-white'>User Name: </label>{data.profile.username}
                    </h4>
                    <h4 className='font-semibold text-[18px] md:text-xl text-nowrap tracking-tighter mb-2'>
                        <label className='text-white block md:inline'>Email Id: </label><span className="text-[15px] md:text-xl">{data.profile.email}</span>
                    </h4>
                    <h2 className='font-bold  mt-[1rem] text-2xl text-yellow-400'>
                        <span className='text-black'>Job Title : </span>{data.jobTitle}
                    </h2>
                    <div>
                            <h2 className='font-bold text-xl'>Description / Bio: </h2>
                            <p className='font-medium italic tracking-tighter text-white'>{data.Bio}</p>
                    </div>
                    <div className='mb-8'>
                        <h5 className='text-black text-xl font-bold'>
                            <span className='text-white'>Joined At : </span>{new Date(data.createdAt).toLocaleDateString()}
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleUser;
