import { useRef, useState } from "react";

export default  function Home() {

    const inputRef = useRef(null);

    function handleCopy() {
      inputRef.current.select();
      document.execCommand("copy");
      console.log("Text copied to clipboard:", inputRef.current.value);
      alert('Text copied to clipboard')
    }


    
    const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();

    

    const res = await fetch('/api/insert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url })
    });
    const data = await res.json();
    if (data.status) {
      setShortUrl(data.data.sort);
      console.log(shortUrl)
    } else {
      alert(data.messsage);
      console.log()
    }
  };


    return (
<div>

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

        <div>
    <p className='font-bold  md:text-6xl text-3xl text-center'>Welcome My Short</p>
    <p className='font-bold  md:text-6xl text-3xl mt-8 text-center'>Free <p className=' inline-block text-pink-400'>Tools</p> Short Link </p>
    </div>


    <div class="flex flex-col items-center justify-center mt-10">
  <div class="w-full ">
    <div class='mt-2 mb-4 flex'>
      <div class="relative w-full">
        <form method="POST" onSubmit={handleSubmit}>
            {shortUrl ? <>
                <input type="text" class='w-full h-12 px-4 pr-10 rounded-lg outline-none bg-white shadow-lg' placeholder='Your Link Here' value={location.protocol + '//' + location.host + '/' + shortUrl }  ref={inputRef}   />
                <button type="submit" class="absolute inset-y-0 right-0 flex items-center justify-center px-4 py-2 text-sm font-bold text-white bg-pink-500 rounded-lg shadow-lg focus:outline-none"  onClick={handleCopy}>Copy</button>
            </> : 
            
            <>

    <input type="text" class='w-full h-12 px-4 pr-10 rounded-lg outline-none bg-white shadow-lg' placeholder='Your Link Here' value={  url }   onChange={(e) => setUrl(e.target.value)} />
        <button type="submit" class="absolute inset-y-0 right-0 flex items-center justify-center px-4 py-2 text-sm font-bold text-white bg-pink-500 rounded-lg shadow-lg focus:outline-none"  >Short</button>
            
            </> }
        
        </form>
      </div>
    </div>
  </div>
</div>


        </div>

        </div>
</div>
    )
}
