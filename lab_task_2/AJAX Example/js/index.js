var api_url = "https://usmanlive.com/wp-json/api/stories/"

$(document).ready(function () {
    

    function loadStories() {
        $.ajax({
            type: "GET",
            url: api_url,
            success: function (response) {
                
                $('#stories').empty();
    
                for (i = 0; i < response.length; i++){
                    innerHTMLs = `<div class="card m-1 col-md-4 col-10">
                    <div  class="story-id"  id="${response[i].id}">
    
                        <h2 class="card-title"> ${response[i].title}</h2>
                        <p class="description">${response[i].content}</p>
    
                        <div class="row">
                        <div class="col">
                          <button id="edit-btn" class="btn btn-secondary w-75 btn-edit">Edit</button>
                        </div>
                        <div class="col">
                          <button id="delete-btn" class="btn btn-danger w-75 btn-delete">Delete</button>
                        </div>
                      </div>
                    </div>
                   
                </div>`;
    
                $('#stories').append(innerHTMLs)
                }
                
            }
        });
    }

    function uploadStory(event){

        event.preventDefault()


        if(checkFields()){
       s_title = $('#input-title').val();
       s_description = $('#input-descrption').val();
        $.ajax({
            type: "POST",
            url: api_url,
            data: {title: s_title , content: s_description},
            success: function (response) {
                console.log("Success"+ response)
                clearForm()
                loadStories();
            }
        });


    }
    }

    function deleteStory(){
        
        
        let index = $(this).closest('.story-id').attr('id')

        $.ajax({
            type: "DELETE",
            url: api_url + index,
            success: function (response) {
                console.log(response)
                loadStories()
            }
        });
    }


    function updateOnEditStory(event){
        event.preventDefault();
        let index = $('#s-id').text();

       let s_title = $('#input-title').val()
       let s_description = $('#input-descrption').val()
       console.log(index,s_title,s_description)
        
        $.ajax({
            type: "PUT",
            url: api_url + index,
            data: {title : s_title, content: s_description},
            success: function (response) {
                console.log(response)
                clearForm()
                loadStories();
            }
        });
    }
    function clearForm(){
        
        $('#s-id').text('empty');
        $('#input-title').val('')
        $('#input-descrption').val('')
    }

    function setNewData(){
            
            var url = api_url+"refresh";
        
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
        
            xhr.onload = function() {
                if (xhr.status >= 200 && xhr.status < 300) {
                    console.log(xhr.responseText);
                } else {
                    
                    console.error("Request failed with status:", xhr.status);
                }
            };
        
            xhr.onerror = function() {
                console.error("Network error occurred");
            };
        
            xhr.send();
    }
    function checkFields(){

        if($('#input-title').val().length < 1 ) {$('.input-descrption-error').removeClass('d-none') }
        if($('#input-descrption').val().length < 1 ) {$('.input-title-error').removeClass('d-none') }

        setTimeout(()=>{
            $('.input-title-error').addClass('d-none') 
            $('.input-descrption-error').addClass('d-none') 
        },3000)

        return ($('#input-title').val().length > 0 ) && ($('#input-descrption').val().length > 0) ;
    }

    function editStory(){
        let parent = $(this).closest('.story-id');

        let id = parent.attr('id');
        let s_title = parent.find('.card-title').text();
        let s_description = parent.find('.description').text();

        // $('form').attr('id').val(id)
        $('#s-id').text(id)
        $('#input-title').val(s_title)
        $('#input-descrption').val(s_description)

        $('.edit-btns').removeClass('d-none');
        $('#create-btn').addClass('d-none');
        console.log(id,s_title,s_description)
    }

    function doBind(){
        $(document).on('click', '#refresh-btn', setNewData)
        $(document).on('click', '#cancel-btn', clearForm)
        $(document).on('click', '#update-btn', updateOnEditStory)
        $(document).on('click', '#edit-btn', editStory)
        $(document).on('click', '#delete-btn', deleteStory)
        $('#create-btn').click(uploadStory);
        loadStories();
    }

    $(document).ready(doBind);
});