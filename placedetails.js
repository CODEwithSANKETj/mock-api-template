
let baseServerURL=`https://mock-server-api-attempt-2.onrender.com`

const toursURL = `${baseServerURL}/cities`;

let mainSection = document.getElementById("tour-details-list-wrapper");



let placeName=localStorage.getItem("placeName") || null;

renderPlaces(placeName)

let box1=document.getElementById("box1")
let textWrapperSection=document.getElementById("text-wrapper")
textWrapperSection.innerHTML=""
    textWrapperSection.innerHTML=`<h1>Welcome!<br>You Are in ${placeName}</h1>`
    
// background conditions

    if(placeName=="Manali"){
      box1.style.backgroundImage = "url('images/manali.jpg')"
    }
    else if(placeName=="Mumbai"){
      box1.style.backgroundImage = "url('images/mumbai.jpg')"
    }
    else if(placeName=="Jammu and Kashmir"){
      box1.style.backgroundImage = "url('images/kashmir.jpg')"
    }
    else if(placeName=="Delhi"){
      box1.style.backgroundImage = "url('images/delhi.jpg')"
    }
    else if(placeName=="Rajasthan"){
      box1.style.backgroundImage = "url('images/rajasthan.jpg')"
    }
    else if(placeName=="Kerla"){
      box1.style.backgroundImage = "url('images/kerla.jpg')"
    }
    

function renderPlaces(placeName){

  fetch(`${baseServerURL}/cities?place=${placeName}`,{
      'method':'GET'
    })
    .then((res)=>res.json())
    .then((data)=>{  
      getPlacesCardList(data)   
      console.log(data)
    })
    .catch((error)=>{console.log(error)})

}


function getPlacesCardList(data){
  let cardList=document.createElement("div")
   cardList.classList.add("card-list")

   data.forEach((item)=>{
    
    item.details.forEach((ele)=>{
      let card=createPlacesCard(ele.name,ele.image,ele.details)
      mainSection.innerHTML=""
    cardList.append(card)
    
    console.log(item.details)
    })  
    mainSection.append(cardList) 
   })
}


function createPlacesCard(name,image,details){
  let card=document.createElement("div")
  card.classList.add("card")

  let card_image=document.createElement("div")
  card_image.classList.add("card-image")

  let img=document.createElement("img")
  img.src=image
  img.setAttribute("alt","pic")

  let card_body=document.createElement("div")
  card_body.classList.add("card-body")
  

  let h3=document.createElement("h3")
  h3.classList.add("card-title")
  h3.textContent=name

  let card_desc=document.createElement("div")
  card_desc.classList.add("card-desc")
  card_desc.textContent=details

  let link=document.createElement("a")
  link.setAttribute("href","#")
  link.setAttribute("data-name",name)
  link.classList.add("card-link")
  link.textContent="Book Now "

  link.addEventListener("click",function(){
    
  })

  

card_image.append(img)
card_body.append(h3,card_desc,link)

card.append(card_image,card_body)

return card;
}