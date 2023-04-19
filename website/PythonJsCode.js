fetch("https://test-windafadfsdapp.azurewebsites.net/api/test-windafadfsdapp")
.then((res) => res.json())
.then((data) => {
  const viewCount = data.viewCount; // Access the viewCount property
  console.log("View Count:", viewCount); // Output the viewCount number
  var header=document.getElementById("testr");
  document.querySelector("h1").append(data.viewCount);
  const cors = require("cors")
  app.use(cors)})
  
.catch((error) => {
  console.error("Error:", error); // Handle any errors that may occur
})
