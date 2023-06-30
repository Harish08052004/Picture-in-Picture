const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt to select media stream,pass to video element,then play
async function selectMediaStream(){
    try{
       const mediaStream =await navigator.mediaDevices.geyDisplayMedia();
       videoElement.srcObject=mediaStream;
       videoElement.onloadmetadata=()=>{
        videoElement.play();
       }
    }catch(error){
        //catch error here 
        console.log('whoops,error here:',error);
    }
}

button.addEventListener('click',async () =>{
    //Disable Button
    button.disabled =true;
// Start Picture-in-Picture
    await videoElement.requestPictureInPicture();
    //Reset Button
    button.disabled = flase;
});

//on load
selectMediaStream();