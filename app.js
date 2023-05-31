let time1 = document.getElementById("time");

setInterval(() => {
    let d = new Date();
    let timeElement = document.getElementById("time");
    let dateElement = document.getElementById("date");

    timeElement.innerHTML = d.toLocaleTimeString();
    dateElement.innerHTML =
      d.getDate() 
      + "/" + 
      (d.getMonth() + 1)
      + "/" + 
      d.getFullYear();
  }, 1000);