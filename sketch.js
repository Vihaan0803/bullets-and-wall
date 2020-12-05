  var bullet, wall 
  var speed, weight 
    var thickness
    function setup() {
      createCanvas(1600,1600);
      bullet = createSprite(50, 200, 50, 50);
    speed = random(223,321)
    weight = random(30,52) 
    wall = createSprite(1200,200,thickness,height/2)
    //bullet.velocityX=speed 
    thickness=random(22,83)
    }

    function draw() {
      background(0);  
      bullet.velocityX=speed
      drawSprites();
      if(wall.x-bullet.x<wall.width/2+bullet.width/2){
        deformation=(0.5*weight*speed*speed)/22500
        //bullet.velocityX=0;
        
        if(deformation<100){
          bullet.shapeColor="green"
        }
        else if(deformation>100&&deformation<180){
          bullet.shapeColor = "yellow"
        }
        else if(deformation>180){
          bullet.shapeColor="red"
        }
      
      wall.shapeColor=(80,80,80)
      damage=0.5
      bullet.velocityX=0;
      var damage=0.5 * weight *speed * speed/(thickness * thickness  );
      if(damage>10)
      {
        wall.shapeColor=color(255,0,0);
      }

    } }