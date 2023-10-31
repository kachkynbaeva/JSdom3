// function myFunction(user){
//     if (user===`admin`){
//         return `Welcome user`
//     }else{
//         return `not correct ${user}`
//     }
// }
// console.log(myFunction(`kunduz`))
// console.log(myFunction(`admin`))
// function myFunction(day){
//     if(day>=1 && day <= 28) {
//         return `today is ${day}of febuary`
//     } else {
//        return `on febuary only 28 day,your day is ${day} of another month`
//     }
// }
// console.log(myFunction(20))
// console. log(myFunction(29))
// function myFunction(num){
//     if (num===50){
//         return `${num} is equals of 50`
// }else{
//     return `${num} is not correct`
//     }
// }
// console.log(myFunction(50))
// console.log(myFunction(49))
// function myFunction(age,user){
//     if(age >=25){
//         return `welcome ${user} you old`
//     }else{
//         return `rejected ${user} you yang`
//     }
// }
// console.log(myFunction(19,`jyldyz`))
// console.log(myFunction(30,`tanya`))
// function myFunction(user){
//     if (user.length>=3){
//         return `${user} name is short`
//     }else{
//         return `${user} naame is accepted`
//     }
// }
// console.log(myFunction(`ol`))
// console.log(myFunction(`kunduz`))
// function myFunction(age){
//     if (age===20){
//         return `number`
//     }else{
//         return `not a number`
//     }
// }
// console.log(myFunction(20))
// console.log(myFunction(`20`))
// function myFunction(string,age){
//     if (string===`20` && age ===23){
//         return `true`
//     }else{
//         return `false`
//     }
// }
// console.log(myFunction(`20`,23))
// console.log(myFunction(20,23))
// function myfunction (day){
//     if(day===1){
//         return `today is monday/tuesday/wednezday/thursday/friday weekend`
//     }else if(day>=8) {
//         return `max days of week 7`
//     }
// }
// console.log(myfunction(1))
// console.log(myfunction(8))


// hello world
// 1. вам надо будет проверить и убрать пробелы в начале и в конце
// 2. поменять местами world hello
// 3. не первое o поменять на а
// function myFunction(str,a,b,c,d,res){
//     if(str.includes(" ")){
//          a = str.trim()
//
//          b = a.slice(6,12) + " "+ a.slice(0,6)
//
//         //первое решение
//          c = a.split("").reverse().join('')
//         d = c.replace('o', 'a')
//         res =d.split('').reverse().join('')
//         return res
//
//         //второе решение
//         c=a.slice(0,6) + a.slice(6,11).replace('o','a')
//         return c
//     }
//
// }
// console.log(myFunction('    Hello world   '))

// 1. проверить длинну на четность

// function myFunction(a){
//     if(a.length%2===0){
//         return `длина ${a} четная`
//     }else{
//         return `длина ${a} нечетная`
//     }
// }
// console.log(myFunction('kunduz'))
// // console.log(myFunction('aidin'))
// 1. lorem ipsum dolor sit amet => loremipsumdolorsitamet
// function myFunction(str,a){
//     if(str.includes(" ")){
//         a=str.replaceAll(' ','')
//         return a
//     }
// }
// console.log(myFunction('lorem ipsum dolor sit amet'))

// str в задаче вам надо проверить что это строка.
// вы проверяете не пустая ли она. длина мин 4 макс 10. четность длины.

// function myFunction(str){
//   if(typeof str ==='string' && str.length>=4 && str.length<=10 && str.length%2===0){
//       return 'Это строка не пустая, где символ больше 4 и меньше 10, также она четная'
//   }
//   else if (str.length===0 || str.length%2 || str.length<4 || str.length>10){
//       return 'это пустая строка или нечетная, где длина меньше 4 и больше 10'
//   }
// }
// console.log(myFunction('kunduz'))
// console.log(myFunction('samat'))
// console.log(myFunction(''))















