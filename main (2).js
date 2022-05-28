
var canvas = new fabric.Canvas('myCanvas');

player_x = 0.01;
player_y = 0.01;

var player_object= "";
var block_image_object= "";
block_image_height = 50;
block_image_width = 50;
function player_update()
{
	fabric.Image.fromURL("1.1/player.png", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
	console.log("Se presiona p y shift al mismo tiempo");
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}
if(e.shiftKey && keyPressed == '77')
{
	console.log("Se presiona m y shift al mismo tiempo");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;
}

	if(keyPressed == '87')
	{
		up();
		console.log("up");
	}
	if(keyPressed == '65')
	{
		left();
		console.log("left");
	}if(keyPressed == '83')
	{
		down();
		console.log("down");
	}if(keyPressed == '68')
	{
		right();
		console.log("right");
	}
	if(keyPressed == '90')
	{new_image('1.1/aire.jpg');
	console.log("z");}
	if(keyPressed == '88')
	{new_image('1.1/pasto.jpg');
	console.log("x");}
	if(keyPressed == '67')
	{new_image('1.1/tierra.jpg');
	console.log("c");}
	if(keyPressed == '86')
	{new_image('1.1/piedra.jpg');
	console.log("v");}
	if(keyPressed == '75')
	{new_image('1.1/agua.jpg');
	console.log("k");}
	if(keyPressed == '80')
	{new_image('1.2/jijijija.png');
	console.log("p");}
	if(keyPressed == '78')
	{new_image('1.2/ladrillos.jpg');
	console.log("n");}
	if(keyPressed == '76')
	{new_image('1.2/lava.jpg');
	console.log("l");}
	if(keyPressed == '66')
	{new_image('1.2/barrotes.png');
	console.log("b");}
	if(keyPressed == '79')
	{new_image('1.2/pepe chikito.png');
	console.log("o");}
	if(keyPressed == '77')
	{new_image('1.3/acero.jpg');
	console.log("m");}

}
function up()
{
	if(player_y >=0)
	{
		player_y = player_y - block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la w, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
function left()
{
	if(player_x >=0)
	{
		player_x = player_x - block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la a, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
function down()
{
	if(player_y <=1500)
	{
		player_y = player_y + block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la s, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
function right()
{
	if(player_x <=2350)
	{
		player_x = player_x + block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la d, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}