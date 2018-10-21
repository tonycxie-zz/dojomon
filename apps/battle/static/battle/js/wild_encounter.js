$(document).ready(function() {
    $("#moves_form").click(function(e) {
        e.preventDefault();
        $.ajax( {
            url: $(this).attr("action"),
            method: "post",
            data: $(this).serialize(),
            success: function(serverResponse) {
                console.log(serverResponse);
                $(".textbox").hide();
                let content = "";
                for (let i = 0; i < serverResponse.length; i++) {
                    content += "<p>" + serverResponse[i]["fields"]["name"] + "</p>";
                }
                $(".display").html(content);
            }
        })
    });
});