// function for increment or decrement number of ticket
function handleTicketChange(isIncrement,ticketType){
    let ticketInput = document.getElementById(ticketType+'-count');

    if(isIncrement){
        ticketInput.value = ticketInput.value ? parseInt(ticketInput.value) +1 : 1;
    }else{
        if(ticketInput.value != '' && ticketInput.value > 0 ){
            ticketInput.value = parseInt(ticketInput.value) -1;
        }else{
            ticketInput.value = 0;
        }
    }

    // update total
    updateTotal();
}

// function for update subtotal,vat and total
function updateTotal(){
    const totalFirstClassTicketPrice = getTicketNumber('first-class')*150;
    const totalEconomyTicketPrice = getTicketNumber('economy')*100;
    const totalTicketPrice = totalEconomyTicketPrice + totalFirstClassTicketPrice;
    const vat = Math.round((totalTicketPrice/100)*10);
    
    // update total
    document.getElementById('subtotal').innerText = '$'+totalTicketPrice;
    document.getElementById('vat').innerText = '$'+vat;
    document.getElementById('total').innerText = '$'+(totalTicketPrice + vat);
}

// function for get ticket number
function getTicketNumber(ticketType){
    let ticketInput = document.getElementById(ticketType+'-count');
    if(ticketInput.value){
        ticketInput.value = Math.abs(parseInt(ticketInput.value));
        return parseInt(ticketInput.value)
    }
    return 0;
}