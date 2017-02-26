// TODO: Polyfill fetch

var url = "https://sheets.googleapis.com/v4/spreadsheets/177rO3sZmxC_9-91UPf9JjOZzjfpokCOnk_oBSMiUcOA/values/major%20tv?key=AIzaSyC1DObwIS_U1F3YA_ePQFd2Bn50cLmXb-U"
var contactEmails = "";

var allData = []

fetch(url)
.then(parseResponse)
.then(getData);

function parseResponse(response) {
  return response.json()
}

function getData(json) {
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
  });

  renderTable(allData);
  renderEmailLink(allData);

}

function renderTable(tableData) {
  var trs = tableData.reduce(function(acc ,data) {
    return (
      acc +
      '<tr>' +
        '<td>' + data.contact + '</td>' +
        '<td><a href="mailto:' + data.email + '">' + data.email + '</a></td>' +
      '</tr>'
    );
  }, "");
  document.getElementById("tablebody").innerHTML = trs;

}

function renderEmailLink(tableData) {
  var emailArray = tableData.map(function(data) {
    return data.email
  });
  var mailToURI = 'mailto:' + emailArray.join(',');

  document.getElementById('email').href = mailToURI;
}
