// Code your solution in this file!
let scubHq = 42

function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation > 42){
        return pickupLocation - scubHq
    }else{
        return scubHq - pickupLocation
    }
}


  
  function distanceFromHqInFeet(pickupLocation) {
    let blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264
}

  
  function distanceTravelledInFeet(start, destination) {
    if (start > destination){
        return(start - destination)*264
    }else{
        return (destination - start)*264
    }
}

  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; 
    } else if (distance > 400 && distance <= 2000) {
      const pricePerFoot = 0.02;
      return (distance - 400) * pricePerFoot;
    } else if (distance > 2000 && distance <= 2500) {
      return 25; 
    } else {
      return 'cannot travel that far'; 
    }
  }