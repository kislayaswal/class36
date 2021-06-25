class Game{
    //contsructor empty
    constructor(){

    }
    //read from datbase
    getGameState(){
    var gameRef = database.ref('gameState');
    //create an anynymus function or unnamed function 
    gameRef.on("value",function (data){
      gameState = data.val();
    })
    }
    update(state){
        var gameRef = database.ref('/');
        gameRef.set({
            gameState: state
        });
    }
//abstract 
    start(){
        if(gameState===0){
            form = new Form();
            form.display();
        }
    }

}