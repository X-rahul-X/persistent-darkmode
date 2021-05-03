let dark=document.querySelector('.dark-btn');
let body=document.body

dark.addEventListener('click',function(e){
    console.log('rahul')
    e.preventDefault()
    console.log(e)
    body.classList.toggle('dark')

    e.target.textContent=="dark"?e.target.textContent="light":e.target.textContent="dark";

    if(body.classList.contains('dark')){
        localStorage.setItem('darkMode','enabled');
    }else{
        localStorage.setItem('darkMode','disabled');
    }
 
})
if(localStorage.getItem('darkMode')=='enabled'){
    body.classList.toggle('dark')
    // e.target.textContent=="dark"?e.target.textContent="light":e.target.textContent="dark";
    dark.textContent="light"
}else{
    dark.textContent="dark"
}  
