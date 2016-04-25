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
