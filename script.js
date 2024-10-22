const URL = 'https://cdn.shopify.com/s/files/1/0883/2188/4479/files/apiCartData.json?v=1728384889'
const getdetails = async () =>{
    try{
    let response = await fetch(URL);
    let data = await response.json()
    console.log(data.items[0])

let totalSubtotal = 0;
data.items.forEach((item) => {
    const price = item.price;
    const quantity = item.quantity;

let subtotal = price * quantity

var cartItems = document.getElementsByClassName('cart-items')[0]
const productRow = document.createElement('div')

productRow.innerHTML = `
<div style="display:flex; align-items:center; justify-content:space-between; padding-right:90px; padding:30px ">
<div>
<img src = "${data.items[0].image}" alt = "${data.items[0].featured_image.alt}" 
style = "width: 108px; height: 105px; border-radius:10px">
</div>
<div style="font-size:16px; color:#9F9F9F; font-weight:400;line-height:24px">
${data.items[0].title}
</div>
<div style="font-size:16px; color:#9F9F9F; font-weight:400;line-height:24px">
Rs.${data.items[0].price}
</div>
<div style="color:#9F9F9F; border:1px solid #9F9F9F; width:32px; height:32px; border-radius:5px;text-align:center;font-size:16px">
${data.items[0].quantity}
</div>
<div>
₹${subtotal}
</div>
<i class="bi bi-trash text-danger delete-icon" style="cursor: pointer; color:#B88E2F"></i>
</div>
`
cartItems.appendChild(productRow)
totalSubtotal += subtotal;
})

document.getElementById('cart-subtotal').innerText = `Rs.₹${totalSubtotal}`;
document.getElementById('cart-total').innerText = `Rs.₹${totalSubtotal}`;

} catch(error) {
    console.error('Error fetching cart data:', error);
  }
}

getdetails()