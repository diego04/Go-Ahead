/*
 Database in firebase/mongo might look like this
 */

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
    "description":"string",
    "chapters": [
        {
            "id":"chapter uuid"
        }
    ]
}

var chapter = {
    "id": "uuid",
    "sequence":"number",
    "index": "number",
    "title": "string",
    "subChapters": [
        {
            "contentId": "content id",
            "sequence": "number"
        }
    ]
}

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

var votes = {
    "bookId" : "uuid",
    voters: ["user UUIDS"]
}

var users = {
    "id": "uuid"
    /*
        TBC...
    */
}

var appInfo = {
    androidVersion: "float",
    iosVersion: "float"
}
