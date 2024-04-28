

        
window.onload = doBinding;
//defer
function handleFormSubmit(e) {
    let responseDiv = document.getElementById('response');
    let submit_btn = document.getElementById('submit_btn');

    let f_name = document.getElementById('f_name')
    let l_name = document.getElementById('l_name')
    let email = document.getElementById('email')
    let address = document.getElementById('address')
    let message = document.getElementById('message')

    

   if(validator()){

    addSuccess(submit_btn,responseDiv)
    showResponse(responseDiv)
  }
   else{

        showResponse(responseDiv)
        addError(responseDiv)
      }

    
    console.log(f_name.value != '')
    console.log(l_name.value != '')
    console.log(email.value != '')
    console.log(address.value != '')
    console.log(message.value != '')

    
    console.log(event)
    e.preventDefault()
}

function validator(){
  console.log("here")
  validatorSingle()
    return (f_name.value != '') &&  (l_name.value != '')&& (email.value != '')&& (address.value!= '') && (message.value != '');
}

function validatorSingle(){
  console.log("here")
    singleSelectInput(f_name);
    singleSelectInput(l_name);
    singleSelectInput(email);
    singleSelectInput(address);
    singleSelectInput(message);
}

function singleSelectInput(x){
  console.log(x)
  if(x.value == '') {
    x.classList.add("border-red")
    setTimeout(()=>{
     (x).classList.remove("border-red")
    }, 3000);
  }     
}

function showResponse(responseDiv){
  responseDiv.classList.add('show')
  setTimeout(()=>{
    responseDiv.classList.remove("show")
  },3000)
}

function addSuccess(submit_btn,responseDiv){
  submit_btn.classList.add('btn-success')
  responseDiv.classList.add('success')  
  responseDiv.innerText = "Email Sent";


  setTimeout(
    ()=>{
      submit_btn.classList.remove('btn-success')
        responseDiv.classList.remove('success')
        responseDiv.innerText = "";
    },
    3000
)
}

function addError(responseDiv){
  responseDiv.classList.add('error')
  responseDiv.innerText = "Fill All Fields";

  setTimeout(
    ()=>{
        responseDiv.classList.remove('error')
        responseDiv.innerText = "";
    },
    3000
)
}

function doBinding() {
    let submit = document.getElementById('submit_btn');
    submit.onclick = handleFormSubmit
}

