let promise = new Promise(function(Resolve, Reject) {

    let a1=1,b1=2,c1=3;

    let arry1=[a1,b1,c1];

    if(!a1||!b1||!c1){

    Reject("error");
    }else{

        Resolve(arry1);
    }
  });
promise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );
  function myDisplayer(arg) {
    console.log(arg);
  }