/* VCLSD-Pattern: CONTROL
 * VIEW		
 * CONTROL	
 * LOGIC	
 * SERVICE	
 * DATA		<--
 */

/*
 * THESE ARE COLLECTION ITEMS
 * they land in the inventory
 * TODO some are stackable, like arrows
 */
var items = [
		{
		"id": "manual",
		"name": "Manual",
		"image": "img/items/small/manual.png",
		"icon": "img/items/small/manual.png",
		"unlocked": true,
		"found": true
		},
		{
		"id": 		"arrows",
		"name": 	"Arrows",
		"image": 	"img/items/small/arrows.png",
		"icon": 	"img/items/small/arrows.png",
		"unlocked": true,
		"found" : false
		},
		{
		"id": "deku_nut",
		"name": "Deku Nut",
		"image": "img/items/small/deku_nut.png",
		"icon": "img/items/small/deku_nut.png",
		"unlocked": true,
		"found": false
		},
		{
		"id": "#deku_stick",
		"name": "Deku Stick",
		"image": "img/items/small/deku_stick.png",
		"icon": "img/items/small/deku_stick.png",
		"unlocked": true,
		"found": false
		},
		{
		"id": "deku_seeds",
		"name": "Deku Seeds",
		"image": "img/items/small/deku_seeds.png",
		"icon": "img/items/small/deku_seeds.png",
		"unlocked": true,
		"found": false
		},
		{
		"id": "deku_shield",
		"name": "Deku Shield",
		"image": "img/items/small/deku_shield.png",
		"icon": "img/items/small/deku_shield.png",
		"unlocked": true,
		"found": false
		},
		{
		"id": "deku_sword",
		"name": "Deku Sword",
		"image": "img/items/small/deku_sword.png",
		"icon": "img/items/small/deku_sword.png",
		"unlocked": true,
		"found": false
		},
		{
		"id": "normal_boots",
		"name": "Normal Boots",
		"image": "img/items/small/boots_normal.png",
		"icon": "img/items/small/boots_normal.png",
		"unlocked": true,
		"found": false
		},
		{
		"id": "magic_beans",
		"name": "Magic Beans",
		"image": "img/items/small/magic_beans.png",
		"icon": "img/items/small/magic_beans.png",
		"unlocked": true,
		"found": false
		},
		{
		"id": "ocarina",
		"name": "Ocarina",
		"image": "img/items/small/ocarina.png",
		"icon": "img/items/small/ocarina.png",
		"unlocked": true,
		"found": false
		},
		{
		"id": "empty_bottle",
		"name": "Empty Bottle",
		"image": "img/items/small/bottle_empty.png",
		"icon": "img/items/small/bottle_empty.png",
		"unlocked": true,
		"found": false
		},
		{
		"id": "health",
		"name": "Health Potion",
		"image": "img/items/small/bottle_health.png",
		"icon": "img/items/small/bottle_health.png",
		"unlocked": true,
		"found": false
		},
		{
		"id": "boomerang",
		"name": "Boomerang",
		"image": "img/items/small/boomerang.png",
		"icon": "img/items/small/boomerang.png",
		"unlocked": true,
		"found": false
		},
		{
		"id": "beer",
		"name": "Bier",
		"image": "img/items/small/bottle_beer.png",
		"icon": "img/items/small/bottle_beer.png",
		"unlocked": true,
		"found": false
		},
		{
		"id": "#lukas",
		"name": "Nadelsturm",
		"image": "img/items/small/sold_out.png",
		"icon": "img/items/small/sold_out.png",
		"unlocked": true,
		"found": false
		},
		{
		"id": "tanja",
		"name": "Sving",
		"image": "img/items/small/sold_out.png",
		"icon": "img/items/small/sold_out.png",
		"unlocked": true,
		"found": false
		},
		{
		"id": "test1",
		"name": "Test Icon",
		"image": "img/items/small/sold_out.png",
		"icon": "img/items/small/sold_out.png",
		"unlocked": true,
		"found": false
		},
		{
		"id": "test2",
		"name": "Test Icon",
		"image": "img/items/small/sold_out.png",
		"icon": "img/items/small/sold_out.png",
		"unlocked": true,
		"found": false
		},
		{
		"id": "test3",
		"name": "Test Icon",
		"image": "img/items/small/sold_out.png",
		"icon": "img/items/small/sold_out.png",
		"unlocked": true,
		"found": false
		},
		{
		"id": "test4",
		"name": "Test Icon",
		"image": "img/items/small/sold_out.png",
		"icon": "img/items/small/sold_out.png",
		"unlocked": true,
		"found": false
		},
		
];



/*
 * THESE ARE ATTRIBUTE ITEMS
 * they don't land in the inventory, but affect the players status
 */
var attr_items = [
	"heart",
	"key",
	"rupee",
];
	


/*
 * THESE ARE PORTALS TO OTHER VIRTUAL LAYERS
 * (special items)
 */
var layers = {
	//"id"				: "display-name"
	"title"				: "Reality",
	"reality"			: "Reality",
	"kokiri_forest"		: "Kokiri Forest",
	"shop"				: "Shop",
	"gerudo_valley"		: "Gerudo Valley",
	"spirit_temple"		: "Spirit Temple",
};
