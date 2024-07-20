'use client'
const ScrollTop = () => {
    const handleScrollTop=()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  return (
    <>
    <div className="absolute top-[36.5rem] right-[3rem]">
    <img src="/back.png" alt="" onClick={handleScrollTop} className=" rotate-90 w-10 h-10 cursor-pointer fixed" />
    </div>

    </>
  )
}

export default ScrollTop