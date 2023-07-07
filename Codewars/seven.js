//Recursos
//https://www.youtube.com/watch?v=t6WPFguHdW4

//No funciona con input mayor a 20935

const input = 20936;

function getDivisorsCnt(n) {
    let divisor = 2;
  
    if( n == 1) {
      return 1;
    } else if( n == 0){
      return 0;
    } else {
      return divisor + getDivisorsCnt(n, divisor);
    }
  
    function getDivisorsCnt(num, div) {
      if(div > num/2 ) {
        return 0;
      } else {
        if(num % div == 0) {
          return 1 + getDivisorsCnt(num, div+=1)
        } else {
          return getDivisorsCnt(num, div+=1)
        }
      }
    }
  }

  console.log(getDivisorsCnt(input))