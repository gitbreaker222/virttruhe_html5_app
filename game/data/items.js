var items = {
		manual : {
			id			: "manual",
			name		: "Manual",
			image		: "data/img/items/small/manual.png",
			icon		: "data/img/items/small/manual.png",
			stackable	: false,
			use			: function(){
				message.print("read manual");
			},
		},
		arrows : {
			id			: "arrows",
			name		: "Arrows",
			image		: "data/img/items/small/arrows.png",
			icon		: "data/img/items/small/arrows.png",
			stackable	: true,
			use			: use_fn,
		},
		deku_nut : {
			id			: "deku_nut",
			name		: "Deku Nut",
			image		: "data/img/items/small/deku_nut.png",
			icon		: "data/img/items/small/deku_nut.png",
			stackable	: true,
			use			: use_fn,
		},
		deku_stick : {
			id			: "deku_stick",
			name		: "Deku Stick",
			image		: "data/img/items/small/deku_stick.png",
			icon		: "data/img/items/small/deku_stick.png",
			stackable	: true,
			use			: use_fn,
		},
		deku_seeds : {
			id			: "deku_seeds",
			name		: "Deku Seeds",
			image		: "data/img/items/small/deku_seeds.png",
			icon		: "data/img/items/small/deku_seeds.png",
			stackable	: true,
			use			: use_fn,
		},
		deku_shield : {
			id			: "deku_shield",
			name		: "Deku Shield",
			image		: "data/img/items/small/deku_shield.png",
			icon		: "data/img/items/small/deku_shield.png",
			stackable	: false,
			use			: function(){
				system_status.change_layer("shop");
				},
		},
		deku_sword : {
			id			: "deku_sword",
			name		: "Deku Sword",
			image		: "data/img/items/small/deku_sword.png",
			icon		: "data/img/items/small/deku_sword.png",
			stackable	: false,
			use			: use_fn,
		},
		normal_boots : {
			id			: "normal_boots",
			name		: "Normal Boots",
			image		: "data/img/items/small/boots_normal.png",
			icon		: "data/img/items/small/boots_normal.png",
			stackable	: false,
			use			: use_fn,
		},
		magic_beans : {
			id			: "magic_beans",
			name		: "Magic Beans",
			image		: "data/img/items/small/magic_beans.png",
			icon		: "data/img/items/small/magic_beans.png",
			stackable	: true,
			use			: use_fn,
		},
		ocarina : {
			id			: "ocarina",
			name		: "Ocarina",
			image		: "data/img/items/small/ocarina.png",
			icon		: "data/img/items/small/ocarina.png",
			stackable	: false,
			use			: use_fn,
		},
		empty_bottle : {
			id			: "empty_bottle",
			name		: "Empty Bottle",
			image		: "data/img/items/small/bottle_empty.png",
			icon		: "data/img/items/small/bottle_empty.png",
			stackable	: true,
			use			: use_fn,
		},
		health : {
			id			: "health",
			name		: "Health Potion",
			image		: "data/img/items/small/bottle_health.png",
			icon		: "data/img/items/small/bottle_health.png",
			stackable	: true,
			use			: use_fn,
		},
		boomerang : {
			id			: "boomerang",
			name		: "Boomerang",
			image		: "data/img/items/small/boomerang.png",
			icon		: "data/img/items/small/boomerang.png",
			stackable	: false,
			use			: use_fn,
		},
		beer : {
			id			: "beer",
			name		: "Bier",
			image		: "data/img/items/small/bottle_beer.png",
			icon		: "data/img/items/small/bottle_beer.png",
			stackable	: true,
			use			: use_fn,
		},
		lukas : {
			id			: "lukas",
			name		: "Nadelsturm",
			image		: "data/img/items/small/lukas.png",
			icon		: "data/img/items/small/lukas.png",
			stackable	: false,
			use			: use_fn,
		},
		tanja : {
			id			: "tanja",
			name		: "Sving",
			image		: "data/img/items/small/sving.jpg",
			icon		: "data/img/items/small/sving.jpg",
			stackable	: false,
			use			: use_fn,
		},
		rupee : {
			id			: "rupee",
			name		: "Rupee",
			image		: "data/img/items/small/rupee.png",
			icon		: "data/img/items/small/rupee.png",
			stackable	: true,
			use			: use_fn,
		},
		test2 : {
			id			: "test2",
			name		: "Test Icon",
			image		: "data/img/items/small/sold_out.png",
			icon		: "data/img/items/small/sold_out.png",
			stackable	: false,
			use			: use_fn,
		},
		test3 : {
			id			: "test3",
			name		: "Test Icon",
			image		: "data/img/items/small/sold_out.png",
			icon		: "data/img/items/small/sold_out.png",
			stackable	: false,
			use			: use_fn,
		},
		test4 : {
			id			: "test4",
			name		: "Test Icon",
			image		: "data/img/items/small/sold_out.png",
			icon		: "data/img/items/small/sold_out.png",
			stackable	: false,
			use			: use_fn,
		},
		
		
		
	
};

function use_fn(){
	console.log("use");
}
