// something like this

case "title":
			if (key == "#a0000000"){
				type = "portal";
				key = "reality";
			}else{
				type = "N/A";
			}
			break;
	    case "kokiri_forest":
	        map = {
	        	"#00000000"	:	["item", "manual"], // manual
				"#00000001"	:	["item", "arrows"], // arrows
				"#00000002"	:	["item", "deku_nut"], // deku nut
				"#00000003"	:	["item", "deku_stick"], // deku stick
				"#00000004"	:	["item", "deku_seeds"], // deku seeds
				"#00000005"	:	["item", "deku_shield"], // deku shield
				"#00000006"	:	["item", "deku_sword"], // deku sword
				"#00000007"	:	["item", "normal_boots"], // normal boots
				"#00000008"	:	["item", "magic_beans"], // magic beans
				"#00000009"	:	["item", "ocarina"], // ocarina
				"#0000000a"	:	["item", "empty_bottle"], // empty bottle
				"#0000000b"	:	["item", "health"], // health potion 
				"#0000000c"	:	["item", "boomerang"], // boomerang 
				"#0000000d"	:	["item", "lukas"], // lukas 
				"#0000000e"	:	["item", "tanja"], // tanja
				"#0000000f"	:	["attr", "rupees"], // 10 rupees
				"#10000000"	:	["item", "beer"], // beer
				"#a0000000"	:	["portal", "gerudo_valley"], // start card
				"#a0000001"	:	["portal", "reality"], // portal card
			};
			type = map[key][0];
			key = map[key][1];
			console.log("the key is: "+key);
	        break;
	    case "shop":
	        map = {
	        	"#00000000"	:	["item", "manual"], // manual
				"#00000001"	:	["item", "arrows"], // arrows
				"#00000002"	:	["item", "deku_nut"], // deku nut
				"#00000003"	:	["item", "deku_stick"], // deku stick
				"#00000004"	:	["item", "deku_seeds"], // deku seeds
				"#00000005"	:	["item", "deku_shield"], // deku shield
				"#00000006"	:	["item", "deku_sword"], // deku sword
				"#00000007"	:	["item", "normal_boots"], // normal boots
				"#00000008"	:	["item", "magic_beans"], // magic beans
				"#00000009"	:	["item", "ocarina"], // ocarina
				"#0000000a"	:	["item", "empty_bottle"], // empty bottle
				"#0000000b"	:	["item", "health"], // health potion 
				"#0000000c"	:	["item", "boomerang"], // boomerang 
				"#0000000d"	:	["item", "lukas"], // lukas 
				"#0000000e"	:	["item", "tanja"], // tanja
				"#0000000f"	:	["item", "rupees"], // 10 rupees
				"#10000000"	:	["item", "beer"], // beer
				"#a0000000"	:	["portal", "reality"], // start card
				"#a0000001"	:	["portal", "kokiri_forest"], // portal card
			};
			type = map[key][0];
			key = map[key][1];
			console.log("the key is: "+key);
	        break;
	    case "gerudo_valley":
	        map = {
	        	"#00000000"	:	["item", "manual"], // manual
				"#00000001"	:	["item", "arrows"], // arrows
				"#00000002"	:	["item", undefined], // deku nut
				"#00000003"	:	["item", undefined], // deku stick
				"#00000004"	:	["item", undefined], // deku seeds
				"#00000005"	:	["item", undefined], // deku shield
				"#00000006"	:	["item", undefined], // deku sword
				"#00000007"	:	["item", "normal_boots"], // normal boots
				"#00000008"	:	["item", "magic_beans"], // magic beans
				"#00000009"	:	["item", "ocarina"], // ocarina
				"#0000000a"	:	["item", "empty_bottle"], // empty bottle
				"#0000000b"	:	["item", "health"], // health potion 
				"#0000000c"	:	["item", "boomerang"], // boomerang 
				"#0000000d"	:	["item", "lukas"], // lukas 
				"#0000000e"	:	["item", "tanja"], // tanja
				"#0000000f"	:	["item", "rupees"], // 10 rupees
				"#10000000"	:	["item", "beer"], // beer
				"#a0000000"	:	["portal", "kokiri_forest"], // start card
				"#a0000001"	:	["portal", "spirit_temple"], // portal card
			};
			type = map[key][0];
			key = map[key][1];
			console.log("the key is: "+key);
	        break;
	    case "spirit_temple":
	        map = {
	        	"#00000000"	:	["item", "manual"], // manual
				"#00000001"	:	["item", "arrows"], // arrows
				"#00000002"	:	["item", undefined], // deku nut
				"#00000003"	:	["item", undefined], // deku stick
				"#00000004"	:	["item", undefined], // deku seeds
				"#00000005"	:	["item", undefined], // deku shield
				"#00000006"	:	["item", undefined], // deku sword
				"#00000007"	:	["item", "normal_boots"], // normal boots
				"#00000008"	:	["item", "magic_beans"], // magic beans
				"#00000009"	:	["item", "ocarina"], // ocarina
				"#0000000a"	:	["item", "empty_bottle"], // empty bottle
				"#0000000b"	:	["item", "health"], // health potion 
				"#0000000c"	:	["item", "boomerang"], // boomerang 
				"#0000000d"	:	["item", "lukas"], // lukas 
				"#0000000e"	:	["item", "tanja"], // tanja
				"#0000000f"	:	["item", "rupees"], // 10 rupees
				"#10000000"	:	["item", "beer"], // beer
				"#a0000000"	:	["portal", "reality"], // start card
				"#a0000001"	:	["portal", "gerudo_valley"], // portal card
			};
			type = map[key][0];
			key = map[key][1];
			console.log("the key is: "+key);
	        break;
	    default: //reality
	        map = {
	        	"#00000000"	:	["item", "manual"], // manual
				"#00000001"	:	["item", "arrows"], // arrows
				"#00000002"	:	["item", "deku_nut"], // deku nut
				"#00000003"	:	["item", "deku_stick"], // deku stick
				"#00000004"	:	["item", "deku_seeds"], // deku seeds
				"#00000005"	:	["item", "deku_shield"], // deku shield
				"#00000006"	:	["item", "deku_sword"], // deku sword
				"#00000007"	:	["item", "normal_boots"], // normal boots
				"#00000008"	:	["item", "magic_beans"], // magic beans
				"#00000009"	:	["item", "ocarina"], // ocarina
				"#0000000a"	:	["item", "empty_bottle"], // empty bottle
				"#0000000b"	:	["item", "health"], // health potion 
				"#0000000c"	:	["item", "boomerang"], // boomerang 
				"#0000000d"	:	["item", "lukas"], // lukas 
				"#0000000e"	:	["item", "tanja"], // tanja
				"#0000000f"	:	["item", "rupee"], // 10 rupees
				"#10000000"	:	["item", "beer"], // beer
				"#a0000000"	:	["portal", "shop"], // start card
				"#a0000001"	:	["portal", "kokiri_forest"], // portal card
			};
			type = map[key][0];
			key = map[key][1];
			console.log("the key is: "+key);