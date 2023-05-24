import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Post() {
    const router = useRouter();
    const { id } = router.query;
    if(id) { 

        getApi(id).then(response => { 
            if(response.status) {
                location.href = response.data.url
            }  else { 
                window.location.href = "/";
            }
            
            

        })
    }

  return <div></div>;
}



const getApi =  async(id) => { 

    const res = await  fetch('/api/get', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({url: id})
      });

      return res.json()

}