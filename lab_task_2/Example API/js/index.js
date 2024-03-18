var api_url = "https://usmanlive.com/wp-json/api/stories/"

$(document).ready(function () {
    

    function loadStories() {
        $.ajax({
            type: "GET",
            url: api_url,
            success: function (response) {
                
                $('#stories').empty();
    
                for (i = 0; i < response.length; i++){
                    innerHTMLs = `<div class="card m-1 col-4">
                    <div id="${response[i].id}" class="">
    
                        <h2 class="card-title"> ${response[i].title}</h2>
                        <p class="description">${response[i].content}</p>
    
                        
                    </div>
                    <div class="row">
                        <div class="col">
                          <button class="btn btn-secondary w-75 btn-edit">Edit</button>
                        </div>
                        <div class="col">
                          <button class="btn btn-danger w-75 btn-delete">Delete</button>
                        </div>
                      </div>
                </div>`;
    
                $('#stories').append(innerHTMLs)
                }
                
            }
        });
    }

    function doBind(){
        loadStories();
    }

    $(document).ready(doBind);
});