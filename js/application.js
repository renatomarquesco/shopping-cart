
// Variables to get the elements//
$(document).ready(function(){

var inputItem = $("#input-item");
var inputPrice = $("#input-price");
var inputQty = $("#input-qty");
var btnAdd = $("#btn-add");
var divToAdd = $(".div-to-add");
var btnCalculate = $("#btn-calculate")


// Variable to store the subtotal amounts
var storeSubtotal = [];

$(document).on("click","#btn-add" , function (){

    var createRow = ($('<div>', {class: 'row row-added'}));
    createRow.prependTo(divToAdd);

    var createdivItem=($('<div>', {class: 'col-lg-5 div-item'}));
    createdivItem.prependTo(createRow);
    createdivItem.text(inputItem.val())

    var createdivPrice= ($('<div>', {class: 'col-lg-2 div-price'}));
    createdivPrice.insertAfter(createdivItem)
    createdivPrice.text(inputPrice.val())

    var createdivQty= ($('<div>', {class: 'col-lg-1 div-qty'}));
    createdivQty.insertAfter(createdivPrice)
    createdivQty.text(inputQty.val())

    var createdivBtnRemove= ($('<div>', {class: 'col-lg-2 div-btn-remove'}));
    var createBtn = ($('<button>Remove</button>', {id:"remove-btn"}));
    createdivBtnRemove.insertAfter(createdivQty)
    createBtn.appendTo(createdivBtnRemove);

    var createdivSubtotal= ($('<div>', {class: 'col-lg-2 div-subtotal'}));
    createdivSubtotal.insertAfter(createdivBtnRemove)
    var subtotalAmount= Number(inputPrice.val()) * Number(inputQty.val());
    console.log(subtotalAmount)
    createdivSubtotal.text("Subtotal: " + subtotalAmount)
    storeSubtotal.push(subtotalAmount)
    console.log(storeSubtotal)

    createBtn.click(function(){
       $(this).parent().parent().remove();
       
    })
    
 

 







   

})
})
