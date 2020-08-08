$(document).ready(function() {
    getSeverity();
    getProjects();
    $('#project').change(function(){
        getAssignedUsers();
    })

    var url = new URL(window.location.href);
    var id = url.searchParams.get("id");
    console.log("id", id);
    getBug(id);
})

$('#bugSubmit').submit(function(event){
    event.preventDefault();
    console.log('update the bug')
    const url = "https://marksbugtracker.herokuapp.com/bugs/" + $('#id').val();
    data = {
        "project": $('#project').val(),
        "description": $('#description').val(),
        "title": $('#title').val(),
        "operating_system": $('#operatingSystem').val(),
        "severity": $('#severity').val(),
        "status": $('#status').val(),
        
    }
    if($('#assigned').val() != 'null') {
        data["assigned_user"] = $('#assigned').val()
    }
    
    console.log('data', data);
    $.ajax({
        type: "PUT",
        url: url,
        headers: {
        'Authorization': `Token ` + token,
        },
        data: JSON.stringify(data),
        contentType: "application/json",
        crossDomain: true,
        dataType: "json",
        success: function (data, status, jqXHR) {
            window.location.href = "/index.php";
        },
        error: function (jqXHR, status) {
            // error handler
            console.log('jqXHR', jqXHR);
            alert('error' + status.code);
        }
    });

});

