$("#submit-form").submit((e) => {
    e.preventDefault();
    const loadMessage = $(".loading");
    const errorMessage = $(".error-message");
    const sentMessage = $(".sent-message");
    // Update the class to display the sent-message
    loadMessage.removeClass("d-none").addClass("d-block");
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbz2C3P8mJall20_a-QrWh4V8A1bWpqv9r8fSyeOjt2AEIzVWzX0K4W85eUIBwf_Gufj/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function (response) {
            loadMessage.removeClass("d-block").addClass("d-none");
            // window.location.href = "index.html";
        },
        error: function (err) {
            // alert("Something went wrong. Please try again.");
            errorMessage.removeClass("d-none").addClass("d-block");
        },
        complete: function() {
            // Hide the sent-message div after the AJAX request is completed
            sentMessage.removeClass("d-none").addClass("d-block");
        }
    });
});

//Name validation for restricting to use only alphabets
function validateInput() {
    var input = document.getElementById("name");
    input.value = input.value.replace(/[^a-zA-Z]/g, '');
  }

  //Email validation on mouseleave
  $(document).ready(function () {
    $("#email").on("mouseleave", function () {
        const email = $(this).val();
        const $invalidFeedback = $(this).next(".invalid-feedback");

        if (!email.endsWith("@gmail.com")) {
            $invalidFeedback.text("Please provide a valid Gmail email address.");
            $(this).addClass("is-invalid");
        } else {
            $invalidFeedback.text("");  // Clear any previous error message
            $(this).removeClass("is-invalid");
        }
    });
});

//For testing

    // Get the email value for validation
    // const email = document.myForm.email.value;
    // let forms = document.querySelectorAll('.php-email-form');


    // Validate the form fields
    // if (document.myForm.name.value == "") {
    //     alert("Please provide your name!");
    //     document.myForm.name.focus();
    //     return false;
    // }

    // if (email == "") {
    //     alert("Please provide your email!");
    //     document.myForm.email.focus();
    //     return false;
    // }

    // if (!email.endsWith("@gmail.com")) {
    //     alert("Please provide a valid Gmail email address!");
    //     document.myForm.email.focus();
    //     return false;
    // }

    // if (document.myForm.subject.value == "") {
    //     alert("Please provide a subject");
    //     document.myForm.subject.focus();
    //     return false;
    // }

    // if (document.myForm.message.value == "") {
    //     alert("Please provide a message");
    //     document.myForm.message.focus();
    //     return false;
    // }

    // If all validations pass, proceed with form submission