// TODO: Polyfill fetch

//var url = "https://sheets.googleapis.com/v4/spreadsheets/1YgppTK_-AKbUv2rn_QFa6gqvF0qG3OFB15OeMULM4Tw/values/2%20Col?key=AIzaSyC1DObwIS_U1F3YA_ePQFd2Bn50cLmXb-U"
var url = "https://sheets.googleapis.com/v4/spreadsheets/177rO3sZmxC_9-91UPf9JjOZzjfpokCOnk_oBSMiUcOA/values/Sheet1?key=AIzaSyC1DObwIS_U1F3YA_ePQFd2Bn50cLmXb-U"

// var url = "https://sheets.googleapis.com/v4/spreadsheets/1tiTL3IHbEDIjKYH-C1_j-C7t_E0OJSUJAiDWffXvmWw/values/MAJOR%20TV?key=AIzaSyC1DObwIS_U1F3YA_ePQFd2Bn50cLmXb-U"
var contactEmails = "";
var emailLink = document.getElementById('email');

fetch(url)
  .then(parseResponse)
  .then(renderResponse);

function parseResponse(response) {
  return response.json()
}

function renderResponse(json) {

  //Massage data
  var headers = json.values.shift()
  console.log(headers);
  var trs = json.values.map(function(row) {
var data = {}
data[headers[0].toLowerCase()] = row[0]
data[headers[1].toLowerCase()] = row[1]
data[headers[2].toLowerCase()] = row[2]

contactEmails += row[1]+','


    return '\
<tr>\
  <td>' + data.contact + '</td>\
  <td><a href="mailto:' + data.email + '">' + data.email + '</a></td>\
</tr>\
';
  })
  document.getElementById("tablebody").innerHTML = (trs.join("\n"));
}

emailLink.onclick = function() {
  this.href = "mailto:"+contactEmails
}
