
$(document).ready(function() {
    getSeverity();
    getProjects();
    $('#project').change(function(){
        getAssignedUsers();
    })
    
    $('#bugSubmit').submit(function(event){
        event.preventDefault();
        console.log('submit the bug')
    })

});