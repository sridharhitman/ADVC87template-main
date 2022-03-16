var canvas = new fabric.Canvas('myCanvas');
// Create canvas variable
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image (get_image)
{
fabric.Image.fromURL(get_image, function(Img) {
block_image_object = Img;
block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_height);
block_image_object.set({
top:block_y,
left:block_x
});
canvas.add(block_image_object);
});
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
   // r key
	if(keyPressed == 82) // add appropriate keycode
	{
		new_image('rr1.png');
		// upload red ranger
		console.log('r')
	}
	// g key
	if(keyPressed == 71)
	{
		block_x = 200;
		// upload green ranger
		new_image('gr.png');
		console.log('g')
	}
	//y key
	if(keyPressed == 89)
	{
		block_x =350;
		// upload yellow ranger
		new_image('yr.png');
		console.log('y');
	}
	// p key
	if(keyPressed == 80)
	{
		block_x = 600;
		// upload pink ranger
		new_image('pr.png')
		console.log('p')
	}
	//b key
	if(keyPressed == 66)
	{
		block_x = 700;
	// upload blue ranger
	  new_image('br.png');
	  console.log('b')
	}
	
}

