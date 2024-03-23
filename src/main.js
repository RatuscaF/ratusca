import kaboom from "kaboom"
import nipplejs from "nipplejs"

kaboom({
	background: [135, 62, 132],
})

let joystickManager = nipplejs.JoystickManager = nipplejs.create({

	zone: document.getElementById('joystick-container'),
	mode: 'static',
	size: 150,
	threshold: 0.1,
	position: { right: '10%', top: '85%' },
	dynamicPage: true,
	multitouch: true,
	restJoystick: true,
	maxNumberOfNipples: 2,
	shape: "circle",
});


// Load assets
loadSprite("bean", "/sprites/bean.png")
loadSprite("Silviu", "sprites/Silviu.jpg")
loadSprite("Alex", "sprites/Alex.jpg")
loadSprite("Larisa", "sprites/Larisa.jpg")
loadSprite("Daniel", "sprites/Daniel.jpg")
loadSprite("Denisa", "sprites/Denisa.jpg")
loadSprite("Albert", "sprites/Albert.jpg")
loadSprite("Camelia", "sprites/Camelia.jpg")
loadSprite("Madalina", "sprites/Madalina.jpg")
loadSprite("Ioana", "sprites/Ioana.jpg")
loadSprite("Flavius", "sprites/Flavius.jpg")
loadSprite("Andrei", "sprites/Andrei.jpg")
loadSprite("Roxana", "sprites/Roxana.jpg")
loadSprite("Marian", "sprites/Marian.jpg")
loadSprite("Nutu", "sprites/Nutu.jpg")
loadSprite("Raul", "sprites/Raul.jpg")
loadSprite("Florin", "sprites/Florin.jpg")

const SPEED = 0.5 //555
var sex;
var friend;

const player = add([
	sprite("bean"),

	pos(center()),

])



joystickManager.on("move", function (evt, nipple) {
	 
	
	const angle = nipple.angle.radian;
	const force = nipple.force;
  

	const speed = 9000; 
	const xSpeed = Math.cos(angle) * force * speed;
	const ySpeed = Math.sin(angle) * force * -speed;
  
		// Move the player
	player.move(xSpeed * dt(), ySpeed * dt());
	

  });

let welcome = add([
	text( "Ratusca e smechera", { width: width() / 2 }),
	pos(12, 500),
])

// onKeyDown() registers an event that runs every frame as long as user is holding a certain key
onKeyDown("left", () => {
	// .move() is provided by pos() component, move by pixels per second
	player.move(-SPEED, 0)
})

onKeyDown("right", () => {
	player.move(SPEED, 0)
})

onKeyDown("up", () => {
	player.move(0, -SPEED)
})

onKeyDown("down", () => {
	player.move(0, SPEED)
})

// onClick() registers an event that runs once when left mouse is clicked
onKeyDown("r", () => {
	player.moveTo(center())
})


function addButton(txt, p, f) {

	// add a parent background object
	const btn = add([
		rect(200, 50, { radius: 8 }),
		pos(p),
		area(),
		scale(1),
		anchor("center"),
		outline(4),
	])

	// add a child object that displays the text
	btn.add([
		text(txt),
		anchor("center"),
		color(0, 0, 0),
	])

	// onHoverUpdate() comes from area() component
	// it runs every frame when the object is being hovered
	btn.onHoverUpdate(() => {
		const t = time() * 10
		btn.color = hsl2rgb((t / 10) % 1, 0.6, 0.7)
		btn.scale = vec2(1.2)
		setCursor("pointer")
		if (friend == "Silviu") {
			
			player.use(sprite("Silviu"))
			player.scale = 1, 1
			//profile.pos = 700, 50
			sex="m"
		} else if (friend == "Alex") {
			
			player.use(sprite("Alex"))
			player.scale = 0.25, 0.25
			//profile.pos = 700, 50
			sex="m"
		} else if (friend == "Larisa") {
			
			player.use(sprite("Larisa"))
			player.scale = 0.8, 0.8
			//profile.pos = 700, 50
			sex="f"
			
		} else if (friend == "Daniel") {
			
			player.use(sprite("Daniel"))
			player.scale = 0.1735, 0.1735
			//profile.pos = 700, 50
			sex="m"
			
		} else if (friend == "Denisa") {
			
			player.use(sprite("Denisa"))
			player.scale = 1.29, 1.25
			//profile.pos = 700, 50
			sex="f"
		}
		else if (friend == "Albert") {
			
			player.use(sprite("Albert"))
			player.scale = 1.665, 1.665
			//profile.pos = 700, 50
			sex="m"
		}
		else if (friend == "Camelia") {
			
			player.use(sprite("Camelia"))
			player.scale = 0.72, 0.69
			//profile.pos = 700, 50
			sex="f"
		}
		else if (friend == "Flavius") {
			
			player.use(sprite("Flavius"))
			player.scale = 0.6, 0.6
			//profile.pos = 700, 50
			sex="m"
		}
		else if (friend == "Madalina") {
			
			player.use(sprite("Madalina"))
			player.scale = 0.265, 0.265
			//profile.pos = 700, 50
			sex="f"
		}
		else if (friend == "Ioana") {
			
			player.use(sprite("Ioana"))
			player.scale = 0.32, 0.32
			//profile.pos = 700, 50
			sex="f"
		}
		else if (friend == "Andrei") {
			
			player.use(sprite("Andrei"))
			player.scale = 1.15, 1.15
			//profile.pos = 700, 50
			sex="m"
		}
		else if (friend == "Marian") {
			
			player.use(sprite("Marian"))
			player.scale = 0.78, 0.78
			//profile.pos = 700, 50
			sex="m"
		}
		else if (friend == "Roxana") {
			
			player.use(sprite("Roxana"))
			player.scale = 0.27, 0.27
			//profile.pos = 700, 50
			sex="f"
		}
		else if (friend == "Nutu") {
			
			player.use(sprite("Nutu"))
			player.scale = 0.3, 0.3
			//profile.pos = 700, 50
			sex="m"
		}
		else if (friend == "Raul") {
			
			player.use(sprite("Raul"))
			player.scale = 0.25, 0.25
			//profile.pos = 700, 50
			sex="m"
		}
		else if (friend == "Florin") {
			
			player.use(sprite("Florin"))
			player.scale = 0.28, 0.28
			//profile.pos = 700, 50
			sex="m"
		}
	})

	// onHoverEnd() comes from area() component
	// it runs once when the object stopped being hovered
	btn.onHoverEnd(() => {
		btn.scale = vec2(1)
		btn.color = rgb()
		//const t = time() * 10
		//btn.color = hsl2rgb((t / 10) % 1, 0.6, 0.7)
	})



	// onClick() comes from area() component
	// it runs once when the object is clicked
	btn.onClick(f)

	return btn

}
//distanta de 60
addButton("Alex", vec2(130, 40), () => friend = "Alex")
addButton("Silviu", vec2(370, 40), () => friend = "Silviu")
addButton("Larisa", vec2(130, 100), () => friend = "Larisa")
addButton("Daniel", vec2(370, 100), () => friend = "Daniel")
addButton("Denisa", vec2(130, 160), () => friend = "Denisa")
addButton("Albert", vec2(370, 160), () => friend = "Albert")
addButton("Camelia", vec2(130, 220), () => friend = "Camelia")
addButton("Flavius", vec2(370, 220), () => friend = "Flavius")
addButton("Madalina", vec2(370, 280), () => friend = "Madalina")
addButton("Ioana", vec2(130, 280), () => friend = "Ioana")
addButton("Andrei", vec2(130, 340), () => friend = "Andrei")
addButton("Roxana", vec2(370, 340), () => friend = "Roxana")
addButton("Nutu", vec2(130, 400), () => friend = "Nutu")
addButton("Marinas", vec2(370, 400), () => friend = "Marian")
addButton("Raul", vec2(130, 460), () => friend = "Raul")
addButton("Florin", vec2(370, 460), () => friend = "Florin")

onUpdate(() => {
	if(sex=="f") {
		welcome.text = String(friend) + " e smechera"
	} else if (sex=="m") {
		welcome.text = String(friend) + " e smecher"
	}
})




