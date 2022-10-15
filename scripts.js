function ChangeSelectionPic(src) {
    selection_pic.src=src;
};

function num_minus(){
    var number=parseInt(num.value);
    if (number>1){
        num.value=number-1;
    }else{
        num.value=1;
    }
}
function num_plus(){
    var number=parseInt(num.value);
    if (number>0){
        num.value=number+1;
    }else{
        num.value=1;
    }
}
function num_change(){
    if(/^(0|[1-9]\d*)$/.test(num.value)){
        num.value=num.value;
    }else{
        num.value=1;
    }
}
function not(){
    var number=parseInt(num.value);
    var str="В корзину добавлено " +number+ " товаров";
    notif({
            msg: str,
            type: "success"
            });
}