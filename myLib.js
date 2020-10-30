function isTouching(car,wall){
    if (car.x - wall.x <car.width/2 + wall.width/2
      && wall.x - car.x < wall.width/2 + car.width/2
      && car.y - wall.y < wall.height/2 + car.height/2
      && wall.y - car.y < wall.height/2 + car.height/2) {
   return true
  }
  else {
   return false
  }
  }