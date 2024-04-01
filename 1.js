function counter(n) {
    let interval = setInterval(() => {
        console.log(n);
        n--;

        if (n < 0) {
            clearInterval(interval);
        }
    }, 1000);
}

counter(5);






function createConter(n){
let counter = n;
let interval;

  const start = () => {
    console.log(counter);
   interval = setInterval(() =>{
       
        counter--;
        if(counter>=0){
            console.log(counter);
        }
        else{
          stop();
        }
    },100);
  }

  const pause = () =>{
    clearInterval(interval);
  }

  const stop = () => {
    clearInterval(interval);
    counter = n;
  }

  return{
    start,
    pause,
    stop
  };
}

const counterObj = createConter(10);
counterObj.start();
setTimeout(()=>{
counterObj.pause();
},500)
setTimeout(()=>{
counterObj.start();
},5000)
setTimeout(()=>{
counterObj.stop();
},5500)

