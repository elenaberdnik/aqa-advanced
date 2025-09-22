function checkOrder (available, ordered) {
if (available < ordered) {
    return "Your order is too large, we do not have enough goods.";
}
if  (ordered === 0) {
    return "Your order is empty";
}
return "Your order is accepted";

}