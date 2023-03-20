function Add(x, y) {
    if (!(isNaN(x) || isNaN(y))) {

        return ("The Result Of Sum = " + (x + y));
    }
    else {

        return ("Error There is Char in this input ")
    }
}
function Sub(x, y) {
    if (!(isNaN(x) || isNaN(y))) {

        return ("The result of sub = ", x - y);
    }
    else {

        return ("Error There is Char in this input ")
    }
}
function Div(x, y) {
    if (!(isNaN(x) || (isNaN(y))) && parseInt(y) != 0) {

        return ("The result of Divide ", x / y);
    }
    else {

        return ("Error There is Char in this input Or Devide by 0 ")
    }
}
module.exports =
{
    Add: Add,
    Sub: Sub,
    Div: Div
}