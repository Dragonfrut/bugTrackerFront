
function getBugs()
{
  console.log('get bugs')  
  const url = "https://marksbugtracker.herokuapp.com/bugs";
  $.ajax({
    type: "GET",
    url: url,
    headers: {
      'Authorization': `Token ` + token,
    },
    contentType: "application/json; charset=utf-8",
    crossDomain: true,
    dataType: "json",
    success: function (data, status, jqXHR) {
      console.log('result', data);
      data.results.forEach(function(bug){
        console.log('bug', bug)
        $('#bugs tr:last').after('<tr>\
                <td>' + bug.title + '</td>\
                <td>' + bug.dateCreated + '</td>\
                <td>' + bug.reportedBy + '</td>\
            </tr>')
      })
    },
    error: function (jqXHR, status) {
      // error handler
      console.log(jqXHR);
      alert('error' + status.code);
    }
  });
}

$(document).ready(function() {
    getBugs();
});