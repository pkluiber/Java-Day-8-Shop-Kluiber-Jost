function rabatt() {
    var price = 3;
    var neuePreis = price * 0.90;
    // var rab = 0.1;
    // var ergeb = price - (price * rab);
    document.getElementById("total").innerHTML = neuePreis.toFixed(2);
}

console.log(rabatt())