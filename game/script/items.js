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
		"key": "#00000000",
		"name": "Manual",
		"image": "img/items/small/manual.png",
		"icon": "img/items/small/manual.png",
		"unlocked": true,
		"found": true
		},
		{
		"key": 		"#00000001",
		"name": 	"Arrows",
		"image": 	"img/items/small/arrows.png",
		"icon": 	"img/items/small/arrows.png",
		"unlocked": true,
		"found" : false
		},
		{
		"key": "#00000002",
		"name": "Deku Nut",
		"image": "img/items/small/deku_nut.png",
		"icon": "img/items/small/deku_nut.png",
		"unlocked": true,
		"found": false
		},
		{
		"key": "#00000003",
		"name": "Deku Stick",
		"image": "img/items/small/deku_stick.png",
		"icon": "img/items/small/deku_stick.png",
		"unlocked": true,
		"found": false
		},
		{
		"key": "#00000004",
		"name": "Deku Seeds",
		"image": "img/items/small/deku_seeds.png",
		"icon": "img/items/small/deku_seeds.png",
		"unlocked": true,
		"found": false
		},
		{
		"key": "#00000005",
		"name": "Deku Shield",
		"image": "img/items/small/deku_shield.png",
		"icon": "img/items/small/deku_shield.png",
		"unlocked": true,
		"found": false
		},
		{
		"key": "#00000006",
		"name": "Deku Sword",
		"image": "img/items/small/deku_sword.png",
		"icon": "img/items/small/deku_sword.png",
		"unlocked": true,
		"found": false
		},
		{
		"key": "#00000007",
		"name": "Normal Boots",
		"image": "img/items/small/boots_normal.png",
		"icon": "img/items/small/boots_normal.png",
		"unlocked": true,
		"found": false
		},
		{
		"key": "#00000008",
		"name": "Magic Beans",
		"image": "img/items/small/magic_beans.png",
		"icon": "img/items/small/magic_beans.png",
		"unlocked": true,
		"found": false
		},
		{
		"key": "#00000009",
		"name": "Ocarina",
		"image": "img/items/small/ocarina.png",
		"icon": "img/items/small/ocarina.png",
		"unlocked": true,
		"found": false
		},
		{
		"key": "#0000000a",
		"name": "Empty Bottle",
		"image": "img/items/small/bottle_empty.png",
		"icon": "img/items/small/bottle_empty.png",
		"unlocked": true,
		"found": false
		},
		{
		"key": "#0000000b",
		"name": "Health Potion",
		"image": "img/items/small/bottle_health.png",
		"icon": "img/items/small/bottle_health.png",
		"unlocked": true,
		"found": false
		},
		{
		"key": "#0000000c",
		"name": "Boomerang",
		"image": "img/items/small/boomerang.png",
		"icon": "img/items/small/boomerang.png",
		"unlocked": true,
		"found": false
		},
		{
		"key": "#0000000d",
		"name": "Test Icon",
		"image": "img/items/small/sold_out.png",
		"icon": "img/items/small/sold_out.png",
		"unlocked": true,
		"found": false
		},
		{
		"key": "#0000000e",
		"name": "Test Icon",
		"image": "img/items/small/sold_out.png",
		"icon": "img/items/small/sold_out.png",
		"unlocked": true,
		"found": false
		},
		{
		"key": "#0000000f",
		"name": "Test Icon",
		"image": "img/items/small/sold_out.png",
		"icon": "img/items/small/sold_out.png",
		"unlocked": true,
		"found": false
		},
		{
		"key": "#00000010",
		"name": "Test Icon",
		"image": "img/items/small/sold_out.png",
		"icon": "img/items/small/sold_out.png",
		"unlocked": true,
		"found": false
		},
		{
		"key": "#00000011",
		"name": "Test Icon",
		"image": "img/items/small/sold_out.png",
		"icon": "img/items/small/sold_out.png",
		"unlocked": true,
		"found": false
		},
		{
		"key": "#00000012",
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
