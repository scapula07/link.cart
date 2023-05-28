import React,{useEffect} from 'react'



export default function Checkout({carts}) {




    
    var extensionId = "ojpgefcpiicakbipcjegbinbccionhkd";

        // Make a simple request:
       
        const sendExtMsg=()=>{
            console.log("sending")
            chrome.runtime?.sendMessage(extensionId, {message:carts,vendorWallet:{address: "0x627306090abab3a6e1400e9345bc60c78a8bef57",privateKey:"0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3"}
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
            <button className='bg-slate-400 text-white py-2 px-8 rounded-lg text-sm font-semibold w-full' onClick={sendExtMsg}>Paycart</button>
            </main>

            
        </div>

    </div>
  )
}
