const dj = document.getElementById('dj')
const venue = document.getElementById('venue')
const photographer = document.getElementById('photographer')
const videographer = document.getElementById('videographer')
const weddingGown = document.getElementById('wedding-gown')
const foodVendor = document.getElementById('food-vendor')

// response form
const responseForm = document.querySelector('.response-form')


// dj
dj.addEventListener('click', ()=>{
    if(responseForm.style.display === 'none'){
        responseForm.style.display = 'block'
    }else{
        responseForm.style.display = 'none'
    }
})

// photographer

photographer.addEventListener('click', ()=>{
    if(responseForm.style.display === 'none'){
        responseForm.style.display = 'block'
    }else{
        responseForm.style.display = 'none'
    }
})

// videographer

videographer.addEventListener('click', ()=>{
    if(responseForm.style.display === 'none'){
        responseForm.style.display = 'block'
    }else{
        responseForm.style.display = 'none'
    }
})

// venue

venue.addEventListener('click', ()=>{
    if(responseForm.style.display === 'none'){
        responseForm.style.display = 'block'
    }else{
        responseForm.style.display = 'none'
    }
})

// wedding gown

weddingGown.addEventListener('click', ()=>{
    if(responseForm.style.display === 'none'){
        responseForm.style.display = 'block'
    }else{
        responseForm.style.display = 'none'
    }
})

// wedding gown

foodVendor.addEventListener('click', ()=>{
    if(responseForm.style.display === 'none'){
        responseForm.style.display = 'block'
    }else{
        responseForm.style.display = 'none'
    }
})


// close response form
const closeForm = document.getElementById('close-form')
closeForm.addEventListener('click', ()=>{
 responseForm.style.display = 'none'
})
