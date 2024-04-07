$(document).ready(()=>{
    var queryParams = getQueryParams();
    var registrationData = JSON.parse(queryParams.data);
    console.log(registrationData);
    $('p').html(`${registrationData.firstName}, thank you for registering for this event. The event fee is: $${registrationData.fee.toFixed(2)}.`)
})

function getQueryParams() {
    var queryParams = {};
    var queryString = window.location.search.substring(1);
    var vars = queryString.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        queryParams[pair[0]] = decodeURIComponent(pair[1]);
    }
    return queryParams;
}

