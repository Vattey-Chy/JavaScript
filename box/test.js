var btntable=document.getElementById('btnTable');
var id=document.getElementById('txt-id');
var Name=document.getElementById('txt-name');
var qty=document.getElementById('txt-qty');
var price=document.getElementById('txt-price');
var total=document.getElementById('txt-total');
var index;
const itemList=[
    {
        'ID': '1', 'Name': 'Coca', 'QTY': '3', 'Price': '10', 'Total': '30'
    },
    {
        'ID': '2', 'Name': 'Sting', 'QTY': '5', 'Price': '10', 'Total': '70'
    },
    {
        'ID': '3', 'Name': 'Fanta', 'QTY': '7', 'Price': '10', 'Total': '70'
    },
]
id.value=itemList.length+1;
// join table
getItem=()=>{
    var granddata=0;
    var txt='';
    txt +=`
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>QTY</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
        </tr>
    `;
    for(let i in itemList)
    {
        txt +=`
            <tr>
                <td>${itemList[i]['ID']}</td>
                <td>${itemList[i]['Name']}</td>
                <td>${itemList[i]['QTY']}</td>
                <td>${itemList[i]['Price']}</td>
                <td>${itemList[i]['Total']}</td>
                <td>
                    <input type="button" id="btnedit" class="btn btn-primary btnedit" value="Edit">
                    <input type="button" id="btndelete" class="btn btn-success btndelete" value="Delete">
                </td>
            </tr>
            
        `;
        granddata = granddata+parseFloat(itemList[i]['Total']);
    }
    var GrandTotal=`
        <td colspan="4" align="right">GrandTotal</td>
        <td>${granddata}</td>
        <td></td>
    `;
    btntable.innerHTML=txt+GrandTotal;
    // Edit data
    btnEdit = document.querySelectorAll('.btnedit');
    btnEdit.forEach((e,i) => {
        e.addEventListener('click',function(){
            id.value = itemList[i]['ID'];
            Name.value = itemList[i]['Name'];
            qty.value = itemList[i]['QTY'];
            price.value = itemList[i]['Price'];
            total.value = itemList[i]['Total'];
            index=i;
        })
    });
}
getItem();

// add data to table
document.getElementById('btnAdd').addEventListener('click',function(){
    itemList.push(
        {
            'ID' :id.value,
            'Name' :Name.value,
            'QTY' :qty.value,
            'Price' :price.value,
            'Total' :total.value,
        }
    )
    getItem();
    id.value=itemList.length+1;
    clearData();
});
clearData=()=>{
    // id.value="";
    Name.value="";
    qty.value="";
    price.value="";
    total.value="";
}

// result total
getTotal=()=>{
    total.value= qty.value * price.value;
}
qty.addEventListener('keyup', function(){
    getTotal();
})
price.addEventListener('keyup', function(){
    getTotal();
})
// update
document.getElementById('btnUpdate').addEventListener('click',function(){
    itemList[index]['ID']= id.value;
    itemList[index]['Name']= Name.value;
    itemList[index]['QTY']= qty.value;
    itemList[index]['Price']= price.value;
    itemList[index]['Total']= total.value;
    getItem();
    clearData();
})

// button delete



