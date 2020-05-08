function convertToChinese(num){
    var N = [
        "零", "一", "二", "三", "四", "五", "六", "七", "八", "九"
    ];
    var str = num.toString();
    var len = num.toString().length;
    var C_Num = [];
    for(var i = 0; i < len; i++){
        C_Num.push(N[str[i]]);
    }
    return C_Num.join('');
};
console.log(convertToChinese(75366));