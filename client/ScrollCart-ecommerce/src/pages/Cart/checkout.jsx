import React,{useEffect} from 'react'



export default function Checkout({carts}) {




    
    var extensionId = "cfbnfofnpjebmbgkdilaoamifobmgdpa";

        // Make a simple request:
       
        const sendExtMsg=()=>{
            console.log("sending")
            chrome.runtime?.sendMessage(extensionId, {message:carts,vendorAddress:"0x7b158840956385dE998fC306053dBEE0A007dB3b"
               },
                function(response) {
                    console.log(response,"response")
               
                    if (!response.success)
                    handleError("chrome-extension://ojpgefcpiicakbipcjegbinbccionhkd/src/pay.html");
            });
        }
        useEffect(() => {
            // Listen for messages from the extension
            chrome.runtime?.onMessage?.addListener(function(request, sender, sendResponse) {
              // Process the received message and perform necessary actions
                console.log("request",request)
            });
        
            // Clean up the listener when the component unmounts
            return () => {
              chrome.runtime?.onMessage?.removeListener();
            };
          }, []);
        
      
      
  return (
    <div className='bg-white rounded-lg shadow-lg px-4 py-4 flex flex-col space-y-10'>
        <div className='flex flex-col space-y-4'>
            <h5 className='border-b '>Cart Summary </h5>
            <h5 className='text-sm font-semibold'> Total : $4000</h5>

        </div>

        <div className=''>
            <h5 className='border-b '>Payment methods</h5>
            <main className='flex justify-center py-6'>
            <button className='bg-slate-400 text-white py-2 px-8 rounded-lg text-sm font-semibold w-full' onClick={sendExtMsg}>Link.cart</button>
            </main>

            
        </div>

    </div>
  )
}
