var getPrice = function (hours, speed){
  var rate = 1500;
  if (speed){
    hours /=2;
    rate *= 2.5;
    }
  if (hours>150){
    rate -= 250;
    }    

    return hours * rate
  }
  
var getProfitableProject = function(hours, profit) {
  var quickly = getPrice(hours, true) - profit;
  var notQuickly = getPrice(hours, false);
  var realy = 'срочный';
  var expences = quickly;
  
  if (quickly > notQuickly) {
    realy = 'обычный';
    expences = notQuickly;
  }
  
  return `Выгодней ${realy} проект. Потратишь на него ${expences}`;
}