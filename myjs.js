

var clickedSeats = {};
var totalSeatPrice = 0;


var seatRest1st = document.querySelector('.seatRest1st');


document.addEventListener('click', function (event) {
    if (event.target.classList.contains('seat') && !isSeatLimitExceeded(event.target.id)) {
        // 1. Return which id is clicked
        var clickedId = event.target.id;

        // 2. No one can click more than twice an id and total id clicked not more than 4
        if (clickedSeats[clickedId] === undefined) {
            clickedSeats[clickedId] = 1;
        } else {
            clickedSeats[clickedId]++;
        }

        // 3. Change background color of this id
        event.target.style.backgroundColor = 'green';

        // const sectionDress= document.createElement('div');
        // sectionDress.innerHTML= clickedId + " Seat is Booked";
        // const parent = document.getElementById("seat-booking-div");
        // parent.appendChild(sectionDress);

        var htmlContent = `
        <div class="flex flex-row justify-between">
            <div>
                <p class="font-semibold p-3 rounded-lg">${clickedId}</p>
            </div>
            <div>
                <p class="font-semibold p-3 rounded-lg">Economic</p>
            </div>
            <div>
                <p class="font-semibold p-3 rounded-lg">550</p>
            </div>
        </div>
    `;

        const sectionDress= document.createElement('div');
        sectionDress.innerHTML= htmlContent;
        const parent = document.getElementById("seat-booking-div");
        parent.appendChild(sectionDress);

    

 

       
        totalSeatPrice += 550;

   

        seatRest1st.textContent = parseInt(seatRest1st.textContent) - 1;
        


         document.getElementById("totalPrice").innerText = totalSeatPrice;
        
         document.getElementById("grandTotal").innerText = totalSeatPrice;
        
    
    
    }
});

function isSeatLimitExceeded(seatId) {
    // Check if the total clicked seats exceed 4 or an individual seat exceeds 2 clicks
    return Object.values(clickedSeats).reduce((acc, count) => acc + count, 0) >= 4 || clickedSeats[seatId] >= 2;
}