console.log('module object', module);

function printHello(str){
    if(str) {
        console.log('Hello, '+str+'!' );
    } else {
        console.log('Hello, World!');
    }
}

module.exports = {
    printHello: printHello,
  };
  
  console.log(module);
  