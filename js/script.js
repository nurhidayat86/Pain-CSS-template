function write_header_date(){
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    document.getElementById("header-text").innerHTML = m + "/" + d + "/" + y;
}