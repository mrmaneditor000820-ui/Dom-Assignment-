  //   let count = 0;
    // function increase() {
    //   count++;
    //   document.getElementById("count").innerText = count;
    // }
    // function decrease() {
    //   count--;
    //   document.getElementById("count").innerText = count;
    // }
    // function reset() {
    //   count = 0;
    //   document.getElementById("count").innerText = count;
    // }

    var count = 0;
    function increase(action){
      switch (action) {
        case 'increase':
          count++;
            break;
       case 'decrease':
        count--;
        break;
        case 'reset':
          count = 0;
          break;
      }
       document.getElementById('count').innerText = count;

    }

    