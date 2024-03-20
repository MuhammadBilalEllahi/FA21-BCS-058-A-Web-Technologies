let api_url = "http://127.0.0.1:7860/teachers/"

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: api_url,

        success: function (response) {

            // $('#teachers').empty();

            response.forEach(function (teacher) {
                // Generate HTML for each teacher
                var innerHtml = `<div class="review  border rounded-2 col-3 m-2 p-2 ">
                    <div class="d-flex justify-content-between">
                    
                            <div>
                            
                            <h5>${teacher.t_name}</h5>
                            <h6>${teacher.t_occupation}</h6>
                            </div>
                    <p>${teacher.rating} star</p>
                    </div>


                    <div>
                    <h5>Comments </h5>
                    <p class="commet">${teacher.t_reviews}</p>
                    </div>
                    <p class="teacher-id  d-none">${teacher.id}</p>
                    <div class="">
                    <input id="input-review" class="border rounded-2 bg-light" type="text">
                    <button id="review-btn" class="btn btn-light  float-end">Review</button>
                </div>
                </div>`;
                $('#teachers').append(innerHtml);
            });


        }
    });



    function reviewTeacher() {

        let parent = $(this).closest('.review');
        let t_id = parent.find('.teacher-id').text()
        let review = parent.find('input').val()

        console.group(review)

        $.ajax({
            type: "PUT",
            url: api_url + t_id,
            contentType: "application/json",
            data: JSON.stringify({ t_reviews: [`${review}`] }),
            dataType: "json",

            success: function (response) {
                console.log(response)
            }
        });
    }

    function addTeacher(e){
        e.preventDefault();

        t_name = $('input[name="name"]').val()
        t_occpuation = $('input[name="designation"]').val()

        $.ajax({
            type: "POST",
            url: api_url,
            data: {"id":3,"t_name":t_name,"t_occupation":t_occpuation,"rating":0,"t_reviews":[""]}            ,
            dataType: "json",
            success: function (response) {
                console.log(response)
            }
        });
    }

    $('#add-new').click(function (e) { 
        e.preventDefault();
         $('#t-form').removeClass('d-none')
        
    });

    function getMorendividualReview() {
        let parent = $(this).closest('.review');
        let t_id = parent.find('.teacher-id').text()
        let commet = parent.find('.commet').text()


        $(parent).animate({
            "height": "auto"
        });



        $.ajax({
            type: "GET",
            url: api_url + t_id,
            success: function (response) {
                $(commet).empty()
                console.log(response.t_reviews)
                $(commet).append(response.t_reviews)
            }
        });

    }

    function doBinding() {


        $(document).on('click', '#add-new-teacher', addTeacher)
        $(document).on('click', '#review-btn', reviewTeacher)
    }

    $(document).ready(doBinding)
});


