function prefunction(){
    const preloader = document.getElementById("preloader");
    const mainContent = document.getElementById("main");


    setTimeout(fun,2000);

    function fun(){
        preloader.style.display = "none";

    // Show the main content
    mainContent.style.display = "block";
    }
    setTimeout(book,10000);
    function book(){
        document.querySelector(".booking-container").style.display = "block";
    }
}

function disclose(){
    document.querySelector(".booking-container").style.display = "none";
}




async function book_table(){
    let data =fetch("http://localhost:3000/Booking");
    let data2 =await data;
    let data3 =await data2.json(); 
    console.log(data3)
   
    let date =document.querySelector('#date').value;
    let time = document.querySelector('#time').value;
    let guest =document.querySelector("#guests").value;
    let table=document.querySelector("#tablenumber").value;
    if(date === ""){
        return false;
    }
    else if (time === ''){
        return false;
    }
    else if (guest ===""){
        return false;
    }
    else if (table ===""){
        return false;
    }

    let booking_data ={
        Date:date,
        time:time,
        Guest:guest,
        Table:table,
        request:document.querySelector("#requestbox").value
    }
    
    fetch("http://localhost:3000/Booking",{
        method:"POST",
        headers:{
            'Content_type': 'application/json',
        },
        body:JSON.stringify(booking_data)
    })
    .then(rev=>alert("Your table is booked !!!!!!"));
    console.log(booking_data);
    return true;
    
}