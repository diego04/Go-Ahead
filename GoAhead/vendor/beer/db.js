var beerProduct = {
    id: 'uuid'
    , name: 'beer name'
    , img: 'url'
    , alcoholContent: 'number' //'specific number not to inherit from parent'
    , beerInfo: 'uuid'
    , beerDescription: 'uuid'
    , beerPhotos: 'uuid'
};

var beerInfo = {
    id: 'uuid'
    , ingredients: ['string']
    , introduced: 'date'
    , manufacturerId: 'uuid'
}

var beerDescription = {
    beerId: 'uuid'
    , description: [
        {
            sequence: 'integer'
            , type: 'heading or img or text'
            , text: 'text'
        }
    ]
};

var beerPhotos = {
    beerId: 'uuid',
    beerImgUrl: [
        'urls'
    ]
};

//https://en.wikipedia.org/wiki/Template:Beer_color
//https://en.wikipedia.org/wiki/Beer_style#Strength
//https://en.wikipedia.org/wiki/Template:Beer_color
//https://en.wikipedia.org/wiki/Beer_style#Strength
//https://en.wikipedia.org/wiki/Beer_style#Appearance

//maybe turn below into an open source project; people can poll which categories each belong ? or follow wikipedia style of editing?
var beerDescriptors = {
    beerStyle: [
        'amber', 'blonde', 'brown', 'cream', 'dark', 'fruit', 'golden'
        , 'honey', 'indian pale ale', 'light', 'lime', 'pale', 'pilsner',
        'red', 'strong', 'wheat'
    ]
    , variety: ['pale ales','stout and porter','mild','wheat','lambig', 'lager', 'malts'
    ],
    beerProcess: {
        process: [
            'distilled', 'fermented', 'blending', 'brewing'
        ] //production
    }
    , srm: [
        {
            srm: 2,
            ebc: 4,
            color: '#F8F753'
        },

        {
            srm: 3,
            ebc: 6,
            color: '#F6F513'
        },

        {
            srm: 4,
            ebc: 8,
            color: '#ECE61A'
        },

        {
            srm: 6,
            ebc: 12,
            color: '#D5BC26'
        },

        {
            srm: 8,
            ebc: 16,
            color: '#BF923B'
        },

        {
            srm: 10,
            ebc: 20,
            color: '##BF813A'
        },

        {
            srm: 13,
            ebc: 26,
            color: '#BC6733'
        },

        {
            srm: 17,
            ebc: 33,
            color: '#8D4C32'
        },

        {
            srm: 20,
            ebc: 39,
            color: '#5D341A'
        },

        {
            srm: 24,
            ebc: 47,
            color: '#261716'
        },

        {
            srm: 29,
            ebc: 57,
            color: '#0F0B0A'
        },

        {
            srm: 35,
            ebc: 69,
            color: '#080707'
        },

        {
            srm: 40,
            ebc: 79,
            color: '#030403'
        }

    ]

};



