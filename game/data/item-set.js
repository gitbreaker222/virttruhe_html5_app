/*
 * THESE ARE COLLECTION ITEMS
 * they land in the inventory
 */
var item_set = {
		manual : {
        "id"        : "manual", //TODO check if "id" is used and remove it (technically unnessecarry)
        "name"      : "Manual",
        "image"     : "data/img/items/manual.png",
        "icon"      : "data/img/items/small/manual.png",
        "stackable" : "false",
        "use"       : "read"
    },
    short_summary : {
        "id" : "short_summary",
        "name" : "Short Summary",
        "image" : "data/img/items/memory-card_01.png",
        "icon" : "data/img/items/small/memory-card_01.png",
        "stackable" : "false",
        "use" : "read"
    },
    sector : {
        "id" : "sector",
        "name" : "Sector",
        "image" : "data/img/items/memory-card_02.png",
        "icon" : "data/img/items/small/memory-card_02.png",
        "stackable" : "false",
        "use" : "read"
    },
    detailed_description : {
        "id" : "detailed_description",
        "name" : "Detailed description",
        "image" : "data/img/items/memory-card_03.png",
        "icon" : "data/img/items/small/memory-card_03.png",
        "stackable" : "false",
        "use" : "read"
    },
    aim : {
        "id" : "aim",
        "name" : "Aim",
        "image" : "data/img/items/memory-card_04.png",
        "icon" : "data/img/items/small/memory-card_04.png",
        "stackable" : "false",
        "use" : "read"
    },
    target_group : {
        "id" : "target_group",
        "name" : "Target group",
        "image" : "data/img/items/memory-card_05.png",
        "icon" : "data/img/items/small/memory-card_05.png",
        "stackable" : "false",
        "use" : "read"
    },
    what_is_new : {
        //"id" : "what_is_new",
        "name" : "What is new",
        "image" : "data/img/items/memory-card_06.png",
        "icon" : "data/img/items/small/memory-card_06.png",
        "stackable" : "false",
        "use" : "read"
    },
    benefits_danube_region : {
        //"id" : "benefits_danube_region",
        "name" : "Benefits for Danube region",
        "image" : "data/img/items/memory-card_07.png",
        "icon" : "data/img/items/small/memory-card_07.png",
        "stackable" : "false",
        "use" : "read"
    },
    technology : {
        //"id" : "technology",
        "name" : "Technology",
        "image" : "data/img/items/memory-card_08.png",
        "icon" : "data/img/items/small/memory-card_08.png",
        "stackable" : "false",
        "use" : "read"
    },
    user_friendliness : {
        //"id" : "user_friendliness",
        "name" : "User friendliness",
        "image" : "data/img/items/memory-card_09.png",
        "icon" : "data/img/items/small/memory-card_09.png",
        "stackable" : "false",
        "use" : "read"
    },
    next_steps : {
        //"id" : "next_steps",
        "name" : "Next steps",
        "image" : "data/img/items/memory-card_10.png",
        "icon" : "data/img/items/small/memory-card_10.png",
        "stackable" : "false",
        "use" : "read"
    },
    business_plan : {
        //"id" : "business_plan",
        "name" : "Business plan",
        "image" : "data/img/items/memory-card_11.png",
        "icon" : "data/img/items/small/memory-card_11.png",
        "stackable" : "false",
        "use" : "read"
    },
    background_and_contact : {
        //"id" : "background_and_contact",
        "name" : "Background and contact info",
        "image" : "data/img/items/memory-card_12.png",
        "icon" : "data/img/items/small/memory-card_12.png",
        "stackable" : "false",
        "use" : "read"
    }
};



/*
 * THESE ARE ATTRIBUTE ITEMS
 * they don't land in the inventory, but affect the players status
 */
var attr_items = [
	"heart"
];
	


/*
 * THESE ARE PORTALS TO OTHER VIRTUAL LAYERS
 * (special items)
 */
var layers = {
	//"id"				: "display-name"
	"title"				:   {
							"name" : "Reality",
							"music" : null
							},
	"reality"			:   {
							"name" : "Reality",
							"music" : null
							},
	"secret"		:   {
							"name" : "Secret Layer",
							"music" : ""
							},
	
};
