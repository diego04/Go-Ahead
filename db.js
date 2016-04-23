/*
    let's users know if their app needs update
 */

var appInfo = {
    androidVersion: "float",
    iosVersion: "float"
}

/*
    User Flow:
    1. List alcohol by volume (Main Screen)
    2. After choosing from (#1), show brands that offer that type of drink
    3. Then display products of that brand with that alcohol volume

    //pass all parent information as props to children or clickable event to view some information inherited from parent

    IE: Beer -> Guiness -> Guiness Draught / Guiness Stout / Guiness Red
 */

var alcoholByVolume =
    [
        {"name": "Fruit juice (naturally occurring)", "min": 0, "max": 0.1},
        {"name": "Low-alcohol beer", "min": 0.05, "max": 1.2},
        {
            "name": "Kvass",
            "min": 0.05,
            "max": 1.5
        },
        {"name": "Kefir", "min": 0.2, "max": 2.0},
        {"name": "Kombucha", "min": 0.5, "max": 1.5},
        {
            "name": "Boza",
            "min": 1
        },
        {"name": "Chicha", "min": 1, "max": 11},
        {"name": "Cider", "min": 2, "max": 8.5},
        {
            "name": "Beer",
            "min": 2,
            "max": 12
        },
        {"name": "Alcopops", "min": 4, "max": 17.5},
        {"name": "Malt liquor", "min": 5},
        {
            "name": "Makgeolli",
            "min": 6.5,
            "max": 7
        },
        {"name": "Barley Wine (Strong Ale)", "min": 8, "max": 15},
        {
            "name": "Mead",
            "min": 8,
            "max": 16
        },
        {"name": "Wine", "min": 9, "max": 16},
        {"name": "Kilju", "min": 15, "max": 17},
        {
            "name": "Dessert wine",
            "min": 14,
            "max": 25
        },
        {"name": "Sake (rice wine)", "min": 15},
        {"name": "Liqueurs", "min": 15, "max": 55},
        {
            "name": "Fortified wine",
            "min": 15.5,
            "max": 20
        },
        {"name": "Soju", "min": 17, "max": 45},
        {
            "name": "Shochu",
            "min": 25,
            "max": 45
        },
        {"name": "Ruou (Vietnamese liquor)", "min": 27, "max": 45},
        {
                "name": "Bitters",
            "min": 28,
            "max": 45
        },
        {"name": "Applejack", "min": 30, "max": 40},
        {"name": "Mezcal, Tequila", "min": 32, "max": 60},
        {
            "name": "Vodka",
            "min": 35,
            "max": 50
        },
        {"name": "Brandy", "min": 35, "max": 60},
        {"name": "Grappa", "min": 37.5, "max": 60},
        {
            "name": "Rum",
            "min": 37.5,
            "max": 80
        },
        {"name": "Ouzo", "min": 37.5},
        {"name": "Cachaça", "min": 38, "max": 54},
        {
            "name": "Sotol",
            "min": 38,
            "max": 60
        },
        {"name": "Stroh", "min": 38, "max": 80},
        {"name": "Nalewka", "min": 40, "max": 45},
        {
            "name": "Gin",
            "min": 40,
            "max": 50
        },
        {"name": "Whisky", "min": 40, "max": 68},
        {"name": "Baijiu", "min": 40, "max": 60},
        {
            "name": "Chacha",
            "min": 40,
            "max": 70
        },
        {"name": "Centerbe (herb liqueur)", "min": 70},
        {"name": "Pálinka", "min": 42, "max": 86},
        {"name": "Rakia", "min": 42, "max": 86},
        {"name": "Absinthe", "min": 45, "max": 89.9},
        {
            "name": "Ţuica",
            "min": 45,
            "max": 60
        },
        {"name": "Arak", "min": 60, "max": 65},
        {
            "name": "Poitín",
            "min": 60,
            "max": 95
        },
        {"name": "Neutral grain spirit", "min": 85, "max": 95},
        {
            "name": "Cocoroco",
            "min": 93,
            "max": 96
        },
        {"name": "Rectified spirit", "min": 95, "max": 96}
    ]


var content = {
    "Content": {
        "id": "uuid",
        "title": "content title",
        "structure": [
            {
                "index": "number",
                "content": "string",
                "type": ["url", "image", "heading1-5", "p", "code", "i", "b", "video"]
            }
        ]
    }
}

/*
    ignore this part


var topics = {
    Topics: [
        {
            "name": "topic name",
            "description": "string",
            "keywords": ["string"],
            "books": [
                {
                    "id": "book uuid"
                }
            ]
        }
    ]
}

var book = {
    "id": "uuid",
    "name": "book name",
    "description": "string",
    "chapters": [
        {
            "id": "chapter uuid"
        }
    ]
}

var chapter = {
    "id": "uuid",
    "sequence": "number",
    "index": "number",
    "title": "string",
    "subChapters": [
        {
            "contentId": "content id",
            "sequence": "number"
        }
    ]
}

*/