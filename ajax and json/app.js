document.getElementById('button1').addEventListener('click',loadCustomer);
document.getElementById('button2').addEventListener('click',loadCustomers);

function loadCustomer(e){
    const xhr =new XMLHttpRequest();
    xhr.open('GET','customer.json',true);
    xhr.onload =function(){
        if(this.status===200){
            // console.log(this.responseText);
            const user = JSON.parse(this.responseText);

            const output=`
            <ul>
            <li>ID:${user.id}</li>
            <li>NAME:${user.name}</li>
            <li>AGE:${user.age}</li>
            <li>PLACE:${user.place}</li>
            </ul>
            `
            document.getElementById('customer').innerHTML= output;
        }
    }
    xhr.send();
}

function loadCustomers(e){
    const xhr =new XMLHttpRequest();
    xhr.open('GET','customers.json',true);
    xhr.onload = function(){
        let output = '';
        if(this.status===200){
            const users = JSON.parse(this.responseText);
            users.forEach(function(user){
                output +=`
                <ul>
                <li>ID:${user.id}</li>
                <li>NAME:${user.name}</li>
                <li>AGE:${user.age}</li>
                <li>PLACE:${user.place}</li>
                </ul>
                `;
               
            });
            document.getElementById('customers').innerHTML = output;
        }
    }
    xhr.send();

}
// ready state values
// 0:req not initialized,
// 1:server connection established,
// 2:request Received,
// 3:processing request,
// 4:request finished and response is ready.

// http statuses
// 200 :ok
// 403:forbidden
// 404:not found