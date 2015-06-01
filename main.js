var turn = 0;
var pieces_in_play = 0;
var unique_num_counter = 0;
var slots = [];
var pieces = [];
var game_over = false;

var Piece = function(){
  var sides = [null,null,null,null,null,null];
  var coords = [0,0,0];
  var color;
  var type;
  var in_play = false;
};

setup();

function setup(){
  for (var color = 0; color < 2; color++){
    for (var type = 0; type < 13; type++){
      var p = new Piece();
      p.color = color;
      
      if (type <= 2) p.type = "ant";
      if (type > 2 && type <= 5) p.type = "grasshopper";
      if (type > 5 && type <= 7) p.type = "spider";
      if (type > 6 && type <= 9) p.type = "beetle";
      //if (type == 10) p.type = "ladybug";
      //if (type == 11) p.type = "mosquito";
      if (type == 12) p.type = "bee";
      
      p.in_play = false;
      
      pieces.push(p);
    }
  }
  //alert(JSON.stringify(pieces));
}

function change_turn(){
  if (turn === 0){
    turn = 1;
  }
  else {
    turn = 0;
  }
}

function validate_move(from, to){
  var valid = false;
  // from and to are going to be in the form of from.sides[#]
  if (from.in_play === false) { // placement
    for (var i = 0; i < from.sides.length; i++){
      if (from.sides.color != turn){ // tried to place next to an opponent
        valid = false;
      }
    }
  }
  switch(from.type){
    case "ant":
      break;
    case "grasshopper":
      var oposite_side = from.side + 3;
      if (opposite_side > 5) {
        opposite_side -= 6;
      }
      break;
    case "beetle":
      break;
    case "bee":
      if (to.type !== 'blank'){
        return false;
      }
      break;
    case "spider":
      if (to.type !== 'blank'){
        return false;
      }
      break;
    // case "ladybug":
    //   break; 
    // case "mosquito":
    //   break;
  }
  return valid;
}

// function set_buffers(){
  
// }

function check_win(){
  var win = true;
  for (var i = 0; i < pieces.length(); i++){
    if (pieces[i].type == "bee"){
      for (var j = 0; j < 6; j++){
        if (pieces[i].sides[j].type == "blank") win = false;
      }
    }
  }
  return win;
}


function check_squeeze(spot){
  var valid = true;
  
  var side_count = 0;
  for(var i = 0; i < 6; i++){
    if (spot.sides[i].type != "blank") side_count += 1;
  }
  if (side_count > 4) valid = false;
  
  if(spot.sides[0].type != "blank" 
  && spot.sides[2].type != "blank" 
  && spot.sides[4].type != "blank"){
    valid = false;
  }
  if(spot.sides[1].type != "blank" 
  && spot.sides[3].type != "blank" 
  && spot.sides[5].type != "blank"){
    valid = false;
  }
  
  if(spot.sides[0].type != "blank"
  && spot.sides[1].type != "blank"
  && spot.sides[3].type != "blank"
  && spot.sides[4].type != "blank"){
    valid = false;
  }
  if(spot.sides[1].type != "blank"
  && spot.sides[2].type != "blank"
  && spot.sides[4].type != "blank"
  && spot.sides[5].type != "blank"){
    valid = false;
  }
  if(spot.sides[2].type != "blank"
  && spot.sides[3].type != "blank"
  && spot.sides[5].type != "blank"
  && spot.sides[0].type != "blank"){
    valid = false;
  }
  
  return valid;
}

// function check_hive(){
  
// }

