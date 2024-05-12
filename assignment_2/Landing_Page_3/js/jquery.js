$(document).ready(function () {
    $('#submit_btn').click(function (e) {
        e.preventDefault();

        var nameRegEx = /^[a-zA-Z']+([-][a-zA-Z']+)*$/;

        fName = $('#f_name').val();
        lName = $('#l_name').val();
        email = $('#email').val();
        address = $('#address').val();
        message = $('#message').val();

        console.log(fName, lName, email, address, message)

        $('.all-error').empty('');

        fNameBool = verifyNames(fName, "First Name", nameRegEx)
        lNameBool = verifyNames(lName, "Last Name", nameRegEx)
        emailBool = VerifyEmail(email, "Email")
        addressBool = verifyLength(address, "Address")
        msgBool = verifyLength(message, "Message")
        
        // fName.length < 1 ? error("First Name") : success("First Name")
        // lName.length < 1 ? error("Last Name") : success("Last Name")
        // address.length < 1 ? error("Address") : success("Address")
        // message.length < 1 ? error("Message") : success("Message")
        // !(regEx.test(email)) ? error("Email") : success("Email")

        console.log(fNameBool, lNameBool, emailBool, addressBool, msgBool)

        if(fNameBool && lNameBool && emailBool && addressBool && msgBool){
            $('.all-error').empty('');
            $('.all-error').append("<p>Message Sent!</p>");
        }
    });

    function VerifyEmail(field, msg) {
        var regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if ((regEx.test(field))) {
            success(msg)
        }
        else {
            error(msg)
        }
        return (regEx.test(field));
    }

    function verifyLength(field, msg) {
        if (field.length > 1 && verifyTF(field)) {
            success(msg)

        }
        else {
            error("Enter more characters")
        }
        return (field.length > 1 && verifyTF(field))
    }
    function verifyTF(field) {
        return (field != 'true' && field != 'false')
    }

    function verifyNames(field, msg, regEx) {
        if (field.length > 1 && verifyTF(field)) {
            if ((regEx.test(field))) {
                success(msg)

            }
            else {
                error(msg)
            }
        }
        else {
            error("Enter more characters")
        }

        return (regEx.test(field)) && (field.length > 1);

    }

    function error(msg) {
        $(".all-error").append("<p>❌  " + msg + " <br/></p>")
    }

    function success(msg) {
        $(".all-error").append("<p>✅ " + msg + "<br/></p>")
    }

    // $("input").on("keyup", function(e){
    //     fName.length < 1 ? error("First Name") : success("First Name")
    //     lName.length < 1 ? error("Last Name") : success("Last Name")
    //     address.length < 1 ? error("Address") : success("Address")
    //     message.length < 1 ? error("Message") : success("Message")

    // })
});