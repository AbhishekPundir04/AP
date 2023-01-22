// var obj = {num:2}

//  var addTothis = function(a){

//          return this.num+a;

// }

//  console.log(addTothis.call(obj,3))


// var obj = {num:2};

//  var addTothis = function(a,b,c){

//          return this.num+a+b+c;

// }

//  console.log(addTothis.call(obj,1,2,3));



// var obj = {num:2};

//  var addTothis = function(a,b,c){

//          return this.num+a+b+c;

// }

//  console.log(addTothis.call(obj,1,2,3));



//  var arr =[1,2,3];
//  console.log(addTothis.apply(obj,arr))




// var obj = {num:2};
// var obj = {num:5};


//  var addTothis = function(a,b,c){

//          return this.num+a+b+c;

// }


//  var arr =[1,2,3];
//  console.log(addTothis.apply(obj,arr))
//  console.log(addTothis.apply(obj2,arr))

// var obj = {num:2};
// var obj = {num:5};


//  var addTothis = function(a,b,c){

//          return this.num+a+b+c;

// }


//  var arr =[1,2,3];
//  var bound = addTothis.bind(obj,arr)
// //  console.dir(bound)

// console.log(bound(123))