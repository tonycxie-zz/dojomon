$(document).ready(function() {
    $("#moves_form").click(function(e) {
        e.preventDefault();
        console.log("Sending Ajax request to", $(this).attr("action"));
        console.log("Submitting the following data", $(this).serialize());
        $.ajax( {
            url: $(this).attr("action"),
            method: "post",
            data: $(this).serialize(),
            success: function(serverResponse) {
                console.log(serverResponse);

            }
        })
    });
});