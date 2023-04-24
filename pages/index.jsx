import Image from 'next/image'



export default function Home() {
    return (
<div className='mt-4 mb-4 mr-4 '>
    
    {/* navbars  */}
<div className="h-10 mx-auto">

        <div className="flex justify-end">
        <div className="buttons">
            <button className="w-32 rounded-lg font-bold h-12  outline-none shadow-md bg-pink-500 text-white text-xl">Home</button>
        </div>
        </div>  
     </div> 
     <div className=' mt-32 mb-32 mx-auto max-with-lg'>
        {/* weolcome message  */}
    <p className=' font-bold  md:text-6xl text-3xl text-center'>Welcome My Short</p>
    <p className=' font-bold  md:text-6xl text-3xl mt-8 text-center'>Free <p className=' inline-block text-pink-400'>Tools</p> Short Link </p>


    <div class="flex flex-col items-center justify-center mt-10">
  <div class="w-full ">
    <div class='mt-2 mb-4 flex'>
      <div class="relative w-full">
        <input type="text" class='w-full h-12 px-4 pr-10 rounded-lg outline-none bg-white shadow-lg' placeholder='Your Link Here' />
        <button type="submit" class="absolute inset-y-0 right-0 flex items-center justify-center px-4 py-2 text-sm font-bold text-white bg-pink-500 rounded-lg shadow-lg focus:outline-none">Short</button>
      </div>
    </div>
  </div>
</div>
        </div>

        </div>

     



    )
}