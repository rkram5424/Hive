var turn = 0;
var pieces_in_play = 0;
var unique_num_counter = 0;

var piece = function(){
  var sides = [];
  var color;
  var unique_num;
  var type;
};

function place_piece(piece, position){
 piece.unique_num = unique_num_counter;
 unique_num_counter += 1;
}

function change_turn(){
  if (turn === 0){
    turn = 1;
  }
  else {
    turn = 0;
  }
}

function validate_move(piece, from, to){
  // from and to are going to be in the form of piece.sides[#]
  if (from === null) { // placement
    for (var i = 0; i < piece.sides.length; i++){
      if (piece.sides.color != turn){ // tried to place next to an opponent
        return -1;
      }
    }
  }
  switch(piece.type){
    case "ant":
      break;
    case "grasshopper":
      var oposite_side = piece.side + 3;
      if (opposite_side > 5) {
        opposite_side -= 6;
      }
      break;
    case "beetle":
      break;
    case "bee":
      break;
    case "spider":
      break;
    case "ladybug":
      break;
    case "mosquito":
      break;
  }
}

// function crawl_hive(){
  
// }

function set_buffers(){
  
}

