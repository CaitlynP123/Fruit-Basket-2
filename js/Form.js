class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
    }

    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    
    display() {
        this.title.html("Fruit Catcher");
        this.title.position(400, 50);
        this.title.style('font-size', '100px');
        this.title.style('color', 'lightblue');
       
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'grey');
       
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'red');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
       
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
       
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });

    var reset = createButton("Reset");
    reset.position(1200, 100)

    reset.mousePressed(()=>{
      player.updateCount(0)
      game.update(0)
    })
    }
}