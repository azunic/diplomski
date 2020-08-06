const UNIT_CATEGORIES = ['ml', 'l', 'gr', 'kg', 'komad'];
const MAIN_CATEGORIES = ['Accessories', 'Mirisi', 'Drogerija', 'Kosa', 'Make up', 'Njega'];
const PRODUCT_CATEGORIES = [
    // Accessories
    'Trepavice',
    'Toaletne torbice',
    'Pribor',
    'Šiljila',
    'Nokti',
    'Ogledala',
    'Kistovi',
    'Torbe',
    'Setovi',
    'Pincete',
    'Kosa',
    'Blenderi',
    'Dom',
    'Maske za lice',
    'Kozmetičke kutije',

    // Mirisi
    'Ženski mirisi',
    'Unisex mirisi',
    'Muški mirisi',

    // Drogerija
    'Higijenski proizvodi',
    'Njega tijela',
    'Muška njega',

    // Kosa
    'Njega kose',
    'Styling',
    'Šamponi',
    'Regeneratori',
    'Boje za kosu',

    // Make up
    'Oči',
    'Lice',
    'Usne',
    'Nokti',

    // Njega
    'Sunce',
    'Muška njega',
    'Njega lica',
    'Njega tijela',
    'Njega noktiju',
    'Njega ruku i nogu',
    'Oralna njega',
];
const PRODUCT_SUBCATEGORIES = [
    // Accessories - Kistovi
    'Spremnici za kistove',
    'Torbice',
    'Lice',
    'Oči',
    'Usne',
    'Obrve',

    // Accessories - Dom,
    'Svijeće',
    'Mirisni štapići',
    'Mirisi za dom',
    'Dekoracije',

    // Mirisi - Ženski mirisi
    'Body mist',
    'Deodoranti',
    'Parfemi',
    'Toaletne vode',
    'Losioni za tijelo',
    'Gelovi za tuširanje',
    'Setovi',
    'Hair mist',

    // Mirisi - Unisex mirisi
    'Kolonjske vode',

    // Mirisi - Muški mirisi
    'After shave',
    'Mirisi',
    'Brijanje',
    'Tuširanje',

    // Drogerija - higijenski proizvodi
    'Maramice',
    'Prezervativi i librikanti',
    'Ulošci, tamponi i intimna njega',
    'Vlažne maramice',
    'Toaletni papir',
    'Sapuni',
    'Dezinfekcija i čišćenje',

    // Drogerija - njega tijela
    'Njega ruku',
    'Losioni i kreme za tijelo',
    'Njega usana',
    'Gelovi za tuširanje',

    // Kosa - Styling
    'Ćetke za kosu',

    // Kosa - Boje za kosu
    'Privremene boje',
    'Trajne boje',

    // Makeup - Oči
    'Eyelineri',
    'Korektura',
    'Trepavice',
    'Olovke za oči',
    'Sjenila',
    'Obrve',
    'Highlighter',
    'Primer',
    'Accessories',
    'Setovi',

    // Makeup - Lice
    'Bronzeri',
    'Puderi',
    'Podloga',
    'Korektori',
    'Rumenila',
    'Setovi',
    'Tekući puderi',
    'Kompaktni puderi',
    'Puderi u prahu',
    'Puderi u sticku',
    'Cushions',
    'Highlighteri',
    'Primer',
    'Fiksatori',
    'Accessories',
    'Tonirane kreme',
    'Toneri',
    'Kontura',

    // Makeup - Usne
    'Olovke za usne',
    'Sjajila za usne',
    'Ruževi za usne',
    'Njega usana',
    'Accessories',
    'Setovi',
    'Primeri za usne',
    'Tinte za usne',

    // Makeup - Nokti
    'Njega',
    'Lakovi za nokte',

    // Njega - Sunce
    'Sredstva poslije sunčanja',
    'Sredstva za samotamnjenje',
    'Sredstva za zaštitu od sunca',
    'Sredstva za brže tamnjenje',
];

const NOTIFICATION_TYPES = ['PRODUCT_BUY_REQUEST', 'WISHLISTED_PRODUCT_ON_SALE'];
const GENDERS = ['Muški', 'Ženski', 'Drugo'];


module.exports = Object.freeze({
    UNIT_CATEGORIES,
    MAIN_CATEGORIES,
    PRODUCT_CATEGORIES,
    PRODUCT_SUBCATEGORIES,
    NOTIFICATION_TYPES,
    GENDERS
});