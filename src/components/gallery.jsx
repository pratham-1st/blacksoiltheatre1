import React from 'react'

function Gallery() {
  return (

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="grid gap-4">
          <div>
              <img className="h-auto max-w-full rounded-lg" src="https://i.postimg.cc/6QtbjxQw/Whats-App-Image-2024-06-05-at-23-54-31-96b4c236.jpg" alt=""/>
          </div>
          <div>
              <img className="h-auto max-w-full rounded-lg" src="https://i.postimg.cc/dtZfD9XM/Whats-App-Image-2024-06-05-at-23-56-02-5eb356a3.jpg" alt=""/>
          </div>
          <div>
              <img className="h-auto max-w-full rounded-lg" src="https://i.postimg.cc/8zhnmzNt/Whats-App-Image-2024-06-05-at-23-56-01-f29e2e50.jpg" alt=""/>
          </div>
      </div>
      <div className="grid gap-4">
          <div>
              <img className="h-auto max-w-full rounded-lg" src="https://i.postimg.cc/bwXBntcZ/Whats-App-Image-2024-06-05-at-23-56-01-b52c7100.jpg" alt=""/>
          </div>
          <div>
              <img className="h-auto max-w-full rounded-lg" src="https://i.postimg.cc/SQv5yPg7/Whats-App-Image-2024-06-05-at-23-56-01-5e9deeb2.jpg" alt=""/>
          </div>
          <div>
              <img className="h-auto max-w-full rounded-lg" src="https://i.postimg.cc/90KNJ4DN/Whats-App-Image-2024-06-05-at-23-56-02-6149a49b.jpg" alt=""/>
          </div>
      </div>
  </div>

  )
}

export default Gallery