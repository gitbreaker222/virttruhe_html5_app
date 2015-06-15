var items = {
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
        "image" : "data/img/items/01.png",
        "icon" : "data/img/items/small/01.png",
        "stackable" : "false",
        "use" : "read"
    },
    sector : {
        "id" : "sector",
        "name" : "Sector",
        "image" : "data/img/items/02.png",
        "icon" : "data/img/items/small/02.png",
        "stackable" : "false",
        "use" : "read"
    },
    detailed_description : {
        "id" : "detailed_description",
        "name" : "Detailed description",
        "image" : "data/img/items/03.png",
        "icon" : "data/img/items/small/03.png",
        "stackable" : "false",
        "use" : "read"
    },
    aim : {
        "id" : "aim",
        "name" : "Aim",
        "image" : "data/img/items/04.png",
        "icon" : "data/img/items/small/04.png",
        "stackable" : "false",
        "use" : "read"
    },
    target_group : {
        "id" : "target_group",
        "name" : "Target group",
        "image" : "data/img/items/05.png",
        "icon" : "data/img/items/small/05.png",
        "stackable" : "false",
        "use" : "read"
    },
    what_is_new : {
        //"id" : "what_is_new",
        "name" : "What is new",
        "image" : "data/img/items/06.png",
        "icon" : "data/img/items/small/06.png",
        "stackable" : "false",
        "use" : "read"
    },
    benefits_danube_region : {
        //"id" : "benefits_danube_region",
        "name" : "Benefits for Danube region",
        "image" : "data/img/items/07.png",
        "icon" : "data/img/items/small/07.png",
        "stackable" : "false",
        "use" : "read"
    },
    technology : {
        //"id" : "technology",
        "name" : "Technology",
        "image" : "data/img/items/08.png",
        "icon" : "data/img/items/small/08.png",
        "stackable" : "false",
        "use" : "read"
    },
    user_friendliness : {
        //"id" : "user_friendliness",
        "name" : "User friendliness",
        "image" : "data/img/items/09.png",
        "icon" : "data/img/items/small/09.png",
        "stackable" : "false",
        "use" : "read"
    },
    next_steps : {
        //"id" : "next_steps",
        "name" : "Next steps",
        "image" : "data/img/items/10.png",
        "icon" : "data/img/items/small/10.png",
        "stackable" : "false",
        "use" : "read"
    },
    business_plan : {
        //"id" : "business_plan",
        "name" : "Business plan",
        "image" : "data/img/items/11.png",
        "icon" : "data/img/items/small/11.png",
        "stackable" : "false",
        "use" : "read"
    },
    background_and_contact : {
        //"id" : "background_and_contact",
        "name" : "Background and contact info",
        "image" : "data/img/items/12.png",
        "icon" : "data/img/items/small/12.png",
        "stackable" : "false",
        "use" : "read"
    }
};

read = function read() {
    $("#d_use_item").html(inventory.selected);
    $("#d_use").show();
};
