// Make an HTTP request to the API

//date = "2023/02/24"
//fullApi = link.concat(date)

// api url
url = 
      "https://daltonschool.flikisdining.com/menu/api/weeks/school/dalton-school/menu-type/lunch/2023/02/24";
  
// Defining async function

function getapi() {
    
    // Storing response
  fetch(url, { mode: 'no-cors'})
    .then(res => res.text())
    .then(json => console.log(json))
    // Storing data in form of JSON
    // var data = await response.json();
    // console.log(data);
    // if (response) {
    //     hideloader();
    // }
    // show(data);
}
// Calling that async function
getapi();
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>Name</th>
          <th>Office</th>
          <th>Position</th>
          <th>Salary</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data.list) {
        tab += `<tr> 
    <td>${r.name} </td>
    <td>${r.office}</td>
    <td>${r.position}</td> 
    <td>${r.salary}</td>          
</tr>`;
    }
    // Setting innerHTML as tab variable
    
    document.getElementById("menu_type_id").innerHTML = tab;
}







// fetch(link)
//   .then(response => response.json())
//   .then(data => {
//     // Update the HTML content with the API data
//     const apiData = document.getElementById("rounded_nutrition_info");
//     apiData.innerHTML = data;
//     console.log
//   })
//   .catch(error => console.error(error));


