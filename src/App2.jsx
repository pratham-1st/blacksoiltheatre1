

function App2() {
  return (
    <div className='h-screen w-screen bg-zinc-800  flex'>
           <div className='h-1/6 bg-zinc-900 w-full mt-10 '>
                 <h1 className='text-[2.5vw] font-bold text-white mt-5 flex items-center justify-center'>OUR TEAM</h1>
                 <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://us.123rf.com/450wm/monticello/monticello1804/monticello180400214/103002391-poznan-poland-apr-6-2018-bottles-of-global-soft-drink-brands-including-products-of-coca-cola-company.jpg?ver=6"/>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-sm tracking-widest title-font mb-1">COLDDRINK & BEVERAGES</h3>
                <h2 className="text-gray-900 title-font text-lg font-bold">Frooti, Appy Fizz, Sprite, ThumbsUp</h2>
                <p className="mt-1">Rs. 25/each</p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://us.123rf.com/450wm/monticello/monticello1804/monticello180400214/103002391-poznan-poland-apr-6-2018-bottles-of-global-soft-drink-brands-including-products-of-coca-cola-company.jpg?ver=6"/>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">PRESIDENT</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Rajdeep Singh Rathor</h2>
              </div>
            </div>
            
           </div>
    </div> 
  )
}

export default App2