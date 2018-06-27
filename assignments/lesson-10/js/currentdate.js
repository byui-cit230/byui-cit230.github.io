window.onload = function () {

    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let d = new Date();
    let y = d.getFullYear();
    let m = d.getMonth();
    let dd = d.getDate();
    let day = d.getDay();
    
    document.getElementById("currentdate").innerHTML = weekday[day] + ", " + dd + " " + months[mm] + " " + yyyy;
}