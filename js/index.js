function getElement(id){
    const element = document.getElementById(id)
    return element
}

getElement('cards-container').addEventListener('click', function(e){
   if(e.target.className.includes('heart-icon')){
    const redHeart = getElement('red-heart').innerText
    const  currentHeart = Number(redHeart) + 1;

    getElement('red-heart').innerText = currentHeart

    // const heartBtn = e.target
    // const redHeart = heartBtn.parentNode.
    // console.log(redHeart)
    // const currentHeart = redHeart + 1
    
   }
   if(e.target.className.includes('make-call')){
    const serviceName = e.target.parentNode.parentNode.children[1].innerText
    const serviceNumber = e.target.parentNode.parentNode.children[3].innerText
    
    const coin = getElement('coin').innerText
    const currentCoin = Number(coin) - 20 ;
    
    getElement('coin').innerText = currentCoin
    
    alert(`calling ${serviceName} ${serviceNumber}...`)
    console.log(serviceNumber)
    

    const now = new Date();
    const localTime = now.toLocaleTimeString(); 
    console.log(localTime);

    const callContainer = getElement('call-history-container')
    // const newcallContainer = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[0].children[1]
    const newcallContainer = document.createElement('div')
    newcallContainer.innerHTML = `
    <div class="mt-5 p-4 rounded-lg flex justify-between items-center bg-[#f1efef]">
                                <div>
                                    <h1 class="font-semibold text-[18px]">${serviceName}</h1>
                                    <p class="text-gray-500">${serviceNumber}</p>
                                </div>
                                <span>${localTime}</span>
    </div>
    `;
    callContainer.append(newcallContainer)
    // console.log(callContainer)
   }


})

getElement('clear-btn').addEventListener('click', function(){
    getElement('call-history-container').innerHTML = ""
})