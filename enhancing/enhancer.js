module.exports = {
  succeed,
  get,
  repair,
  fail,
};




function repair(item) {  
   item.durability = 100
  return item
}


function succeed(item) {
  if(item.enhancement<20){
    item.enhancement += 1
  }else{
    item.enhancement = 20
  }
  
  return { ...item };
}

function get(item) {
  return { ...item };
}



function fail(item) {
  if(item.enhancement<15){
    item.durability -=5
  }if(item.enhancement>=15){
    item.durability -=10
  }if(item.enhancement>16){
    item.enhancement -=1
  }
  return { ...item };
}