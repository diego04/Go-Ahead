/*
 Database in firebase/mongo might look like this
 */

var topics = {
    Topics: [
        {
            "name": "topic name",
            "keywords": ["string"],
            "books": [
                {
                    "id": "uuid",
                    "name": "book name",
                    "chapters": [
                        {
                            "index": "number",
                            "title": "string",
                            "subChapters": [
                                {
                                    "contentId": "content id",
                                    "sequence": "number"
                                }
                            ]
                        }
                    ]
                }
            ]
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
