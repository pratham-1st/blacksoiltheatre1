import React from 'react'

function Album() {
  return (
    <div className='p-5 md:p-10'>
        <div className='columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(first-child)]:mt-8'>
            <img src="https://i.postimg.cc/6QtbjxQw/Whats-App-Image-2024-06-05-at-23-54-31-96b4c236.jpg" alt="" />
            <img src="https://i.postimg.cc/90KNJ4DN/Whats-App-Image-2024-06-05-at-23-56-02-6149a49b.jpg" alt="" />
            <img src="https://i.postimg.cc/SQv5yPg7/Whats-App-Image-2024-06-05-at-23-56-01-5e9deeb2.jpg" alt="" />
            <img src="https://i.postimg.cc/bwXBntcZ/Whats-App-Image-2024-06-05-at-23-56-01-b52c7100.jpg" alt="" />
            <img src="https://i.postimg.cc/8zhnmzNt/Whats-App-Image-2024-06-05-at-23-56-01-f29e2e50.jpg" alt="" />
            <img src="https://i.postimg.cc/dtZfD9XM/Whats-App-Image-2024-06-05-at-23-56-02-5eb356a3.jpg" alt="" />
        </div>
    </div>
  )
}

export default Album