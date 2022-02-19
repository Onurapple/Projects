const newEvent = document.querySelector(".add-event-input");
const addBtn   = document.querySelector(".add-btn");
const eventUl  = document.querySelector(".event-ul");
let time     = document.querySelector('.add-event-time');
//time.value = new Date();

addBtn.addEventListener("click", ()=>{
    if (newEvent.value == ""){
        alert("Enter an event name");
    }
    else{
        AddEvent(newEvent.value);
    }
});

eventUl.addEventListener("click", (e)=>{
    let item = e.target;
    
    if (item.classList.contains("fa-check-square")){
        item.parentElement.parentElement.classList.toggle("checked");
        item.classList.toggle("checked-icon");
        console.log(item);
    }
    else if (item.classList.contains("fa-trash")){
        item.parentElement.parentElement.parentElement.remove();
        
        
    }
});

function AddEvent(eventText){
    let div = document.createElement("div");
    div.classList.add("event-div");
    eventUl.appendChild(div);

    let liButton = document.createElement("div");
    liButton.classList.add("liButton");
    div.appendChild(liButton);

    

    let li = document.createElement("li");
    li.classList.add("event-li");
    li.innerText = eventText + ' | ' + time.value.toLocaleString();
    liButton.appendChild(li);

    let checkBtn = document.createElement("button");
    checkBtn.classList.add("event-check-btn");
    checkBtn.innerHTML = "<i class='fas fa-check-square'></i>";
    liButton.appendChild(checkBtn);

    let trashBtn = document.createElement("button");
    trashBtn.classList.add("event-trash-btn");
    trashBtn.innerHTML = "<i class='fas fa-trash'></i>";
    liButton.appendChild(trashBtn);

    let divRemaining = document.createElement("div");
    divRemaining.classList.add("divRemaining");
    div.appendChild(divRemaining);
    
    
    let remaining = document.createElement('span');
    remaining.classList.add('remainingTime');
    divRemaining.appendChild(remaining);
    
    setInterval(myFunc, 1000);
    
    time.addEventListener("change", myFunc);
    function myFunc() {
        var date2 = time.value;
        var dateEntered = new Date(date2);
            
        var yearEntered = dateEntered.getFullYear(); 
        let monthEntered = dateEntered.getMonth(); 
        let DayEntered = dateEntered.getDate(); 
        let HourEntered = dateEntered.getHours(); 
        let minuteEntered = dateEntered.getMinutes(); 
        let secondEntered = dateEntered.getSeconds(); 
        let currentYear = new Date().getFullYear();
        let currentMonth = new Date().getMonth();
        let currentDay = new Date().getDate();
        let currentHour = new Date().getHours();
        let currentMinute = new Date().getMinutes();
        let currentSecond = new Date().getSeconds();
        var year = yearEntered - currentYear;
        let month = monthEntered - currentMonth;
        let day = DayEntered - currentDay;
        let hour = HourEntered - currentHour;
        let minute = minuteEntered - currentMinute;
        let second = secondEntered - currentSecond;
        //********************************* */ 
        if (second < 0) {
            second += 60;
            minute--;
        } 
        if (minute < 0) {
            minute += 60;
            hour--;
        }
        if (hour < 0) {
            hour += 24;
            day--;
        }
        if (day < 0) {
            if (currentMonth == 0 && currentMonth == 2 && currentMonth == 4 && currentMonth == 6 &&
                currentMonth == 7 && currentMonth == 9 && currentMonth == 11){
                    day += 31;
                } else if (currentMonth == 1){
                    day +=28;
                } else{
                    day +=30;
                }
            month--;
        }
        if (month < 0) {
            month += 12;
            year--;
        }
        //********************************** */
        var text = `${year} y ${month} m ${day} d ${hour} hr ${minute} min ${second} sec left`
        remaining.innerText = text;
        }    
    /* div.appendChild(remaining);*/
    newEvent.value = "";
    newEvent.focus();
}
