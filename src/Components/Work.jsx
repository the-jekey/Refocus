import React from 'react'

const Work = () => {
       var images = [
              { URL: "https://plus.unsplash.com/premium_photo-1747290112804-ae262ca52048?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D", top: "50%", left: "50%", isActive: false },
              { URL: "https://images.unsplash.com/photo-1747356826558-4f1d97261978?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D", top: "56%", left: "44%", isActive: false },
              { URL: "https://images.unsplash.com/photo-1745861707861-3fe218029ac4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8", top: "45%", left: "56%", isActive: false },
              { URL: "https://plus.unsplash.com/premium_photo-1675195899685-b77874daecbe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D", top: "60%", left: "53%", isActive: false },
              { URL: "https://images.unsplash.com/photo-1746802284762-2e867039a2da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D", top: "43%", left: "40%", isActive: false },
              { URL: "https://plus.unsplash.com/premium_photo-1722100466194-3896a8ad0279?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D", top: "65%", left: "55%", isActive: false },
       ]
       return (
              <div className='w-full mt-5  '>
                     <div className=" relative max-w-screen-xl mx-auto text-center">
                            <h1 className=' text-[35vw] font-semibold select-none  tracking-tight leading-none'>Work</h1>
                            <div className=" absolute top-0 w-full h-full ">
                                   {images.map((elem, index) => (elem.isActive && (<img className='w-64 absolute rounded-md -translate-x-[50%] -translate-y-[50%]  ' src={elem.URL} style={{ top: elem.top, left: elem.left, }} alt="" />)))}
                            </div>
                     </div>
              </div>
       )
}

export default Work
