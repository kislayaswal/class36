class Form{
    constructor(){}

    
    display(){
        var title = createElement('h1');
        title.html("Car Racing Game");
        title.position(250,100);
        //input box
        var input = createInput("Name");
        input.position(250,200);
        var button = createButton("Register");
        button.position(250,250)
        var greeting= createElement('h3')
        button.mousePressed(function (){
            input.hide();
            button.hide();
            var name = input.value();
            greeting.html("Welcome  "+ name);
            greeting.position(250,250);
        })
    }

}