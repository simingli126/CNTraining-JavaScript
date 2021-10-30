//问题1
const removeRepeat = () => {
    const array = [1, 2, 2, 3, 3, 3, 'a', 'a', 'b'];
    // todo
    const newArray = [...new Set(array)]
    // 输出[1, 2, 3, "a", "b"]
    console.log(newArray);
}
removeRepeat();

//问题2
const findRepeat= () => {
    const array = [1, 2, 2, 3, 3, 3, 'a', 'a', 'b'];
    // todo
    const newArray = [...new Set(array.filter(i => array.indexOf(i) !== array.lastIndexOf(i)))]
    // 输出[2, 3, "a"]
    console.log(newArray);
}
findRepeat();


//问题3
const clone = (object) => {
    //todo
    return {...object}
}
const obj = {
    arr: [{a: 1, f: {q: 1}}, 2, 3],
    obj: {key: 'value'},
    string: 'hello world',
};
const obj1 = clone(obj);
console.log(obj1.string === obj.string);


//问题4
const question4= () => {
    for (var i = 0; i < 5; i++) {
        (function (i) {
            setTimeout(function timer() {
                console.log(i);
            }, i * 1000)
        })(i)
    }
    console.log(i)
    // todo
    //修改代码输出 5,0,1,2,3,4
}
question4();