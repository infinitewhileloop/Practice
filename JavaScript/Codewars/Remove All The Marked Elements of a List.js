// https://www.codewars.com/kata/563089b9b7be03472d00002b/

Array.prototype.remove_ = function(integer_list, values_list) {

    let lastVal;
    while(lastVal = values_list.pop()) {
        integer_list = integer_list.filter(item => item !== lastVal);
    }
    return integer_list;
}
