
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
      data.results.forEach(function(bug){
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

function getSeverity()
{
  console.log('get severtiy')  
  const url = "https://marksbugtracker.herokuapp.com/bugs/attributes";
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
      console.log('result', data.response);
      var severityOptions = '';
      var statusOptions = '';
      var osOptions = '';
      data.response.forEach(function(attribute){
        const objectName = Object.keys(attribute)[0];
        if (objectName == "severities"){
          attribute.severities.forEach(function(value){
            console.log('value', value)
            severityOptions += "<option value='" +
              value[0] + "'>" + 
              value[1] + "</option>";
          })
        } else if (objectName == "statuses") {
          attribute.statuses.forEach(function(value){
            console.log('value', value)
            statusOptions += "<option value='" +
              value[0] + "'>" + 
              value[1] + "</option>";
          })
        } else {
          attribute['operating systems'].forEach(function(value){
            console.log('value', value)
            osOptions += "<option value='" +
              value[0] + "'>" + 
              value[1] + "</option>";
          })
          
        }
        
      })
      $("#severity").html(severityOptions);
      $("#severity").removeAttr("disabled");
      $("#status").html(statusOptions);
      $("#status").removeAttr("disabled");
      $("#operatingSystem").html(osOptions);
      $("#operatingSystem").removeAttr("disabled");
    },
    error: function (jqXHR, status) {
      // error handler
      console.log(jqXHR);
      alert('error' + status.code);
    }
  });
}