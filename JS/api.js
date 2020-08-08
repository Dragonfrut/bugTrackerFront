
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
                <td><a href="/editBug.php?id='+ bug.id +'">' + bug.title + '</a></td>\
                <td>' + bug.dateCreated + '</td>\
                <td>' + bug.reportedByName + '</td>\
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

function getBug(id)
{
  console.log('get bug')  
  const url = "https://marksbugtracker.herokuapp.com/bugs/" + id;
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
      console.log("dataaaaaa", data);
      $('#description').val(data.description);
      $('#title').val(data.title);
      $('#severity').val(data.severity);
      $('#status').val(data.status);
      $('#operatingSystem').val(data.operatingSystem);
      $('#project').val(data.project);
      $('#assigned').val(data.assigned);
      $('#id').val(data.id);
      $('#loading').addClass('hidden');
      $('#bug-form-wrapper').removeClass('hidden');


    },
    error: function (jqXHR, status) {
      // error handler
      console.log(jqXHR);
      alert('error' + status.code);
    }
  });
}


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
            severityOptions += "<option value='" +
              value[0] + "'>" + 
              value[1] + "</option>";
          })
        } else if (objectName == "statuses") {
          attribute.statuses.forEach(function(value){
            statusOptions += "<option value='" +
              value[0] + "'>" + 
              value[1] + "</option>";
          })
        } else {
          attribute['operating systems'].forEach(function(value){
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

function getProjects()
{
  console.log('get projects')  
  const url = "https://marksbugtracker.herokuapp.com/projects";
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
      var projectList = '';
      data.results.forEach(function(project){
        projectList += "<option value='" +
          project.id + "'>" + 
          project.name + "</option>";
      })
      $("#project").html(projectList);
      $("#project").removeAttr("disabled");
      getAssignedUsers();
    },
    error: function (jqXHR, status) {
      // error handler
      console.log(jqXHR);
      alert('error' + status.code);
    }
  });
}

function getAssignedUsers()
{
  $("#assigned").attr("disabled", "disabled");
  console.log('get assigned user')  
  const project_id = $('#project').val();
  const url = "https://marksbugtracker.herokuapp.com/assigned/" + project_id;

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
      var assignedUserList = '<option value="null">Unassigned</option>';
      data.results.forEach(function(assigned){
        assignedUserList += "<option value='" +
          assigned.user + "'>" + 
          assigned.userName + "</option>";
      })
      $("#assigned").html(assignedUserList);
      $("#assigned").removeAttr("disabled");
    },
    error: function (jqXHR, status) {
      // error handler
      console.log(jqXHR);
      alert('error' + status.code);
    }
  });
}
