
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
    let arr = [];
    let arr2 = [];

    matrix.map((elem, index) => {
        if (index & 1) {
            arr2 = elem.reverse();
            arr2.map(el => {
                arr.push(el);
            })
        }
        else {
            elem.map(el => {
                arr.push(el);
            })
        }
    })
  return arr;
}
