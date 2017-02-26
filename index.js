// TODO: Polyfill fetch

var url = "https://sheets.googleapis.com/v4/spreadsheets/177rO3sZmxC_9-91UPf9JjOZzjfpokCOnk_oBSMiUcOA/values/major%20tv?key=AIzaSyC1DObwIS_U1F3YA_ePQFd2Bn50cLmXb-U"
var contactEmails = "";
var emailLink = document.getElementById('email');
var allData = []

fetch(url)
  .then(parseResponse)
  .then(renderResponse);

function parseResponse(response) {
  return response.json()
}

function renderResponse(json) {
  //Massage data
  var headers = json.values.shift()
  var trs = json.values.map(function(row) {
var data = {}

data[headers[0].toLowerCase()] = row[0]
data[headers[1].toLowerCase()] = row[1]
data[headers[2].toLowerCase()] = row[2]
data[headers[3].toLowerCase()] = row[3]
data[headers[4].toLowerCase()] = row[4]
data[headers[5].toLowerCase()] = row[5]

allData.push(data)

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
