function Navbar() {
  return (
    <div className="h-[11vh] md:h-[10vw] w-full bg-zinc-900 flex ">
      <div className="h-full w-2/6 flex items-center justify-center p-10 md:p-0 ">
        <div className="flex items-center">
            <img className="h-[7vh] w-[7vh] md:h-[6vw] md:w-[6vw]" src="https://i.postimg.cc/v82R4TZn/logo.png" alt=""/>
            <h1 className="p-3 text-[1.7vh] md:text-[1.7vw] font-extrabold text-white">BLACK SOIL<br />THEATRE.</h1>
        </div>
      </div>

      <div className="h-full w-2/3 flex items-center justify-center">
        <div className="flex gap-5 md:gap-8">
          <h1 className="text-white text-[1.4vh] md:text-[1.3vw] font-bold"><a href="#">GALLERY</a></h1>
          <h1 className="text-white text-[1.4vh] md:text-[1.3vw] font-bold"><a href="#">MEMBERS</a></h1>
          <h1 className="text-white text-[1.4vh] md:text-[1.3vw] font-bold"><a href="#">ABOUT US</a></h1>
        </div>
      </div>
            
    </div>
  )
}

export default Navbar