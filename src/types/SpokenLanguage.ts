// const obj = $$('#select-menu-spoken-language > details-menu > div.select-menu-list > div a').reduce(
//     (acc, e) => {
//         acc[e.textContent.trim()] = e.href.slice(e.href.lastIndexOf('=') + 1);
//         return acc;
//     },
//     {},
// );
// copy(JSON.stringify(obj, null, 4).replace(':', '='));

export enum SpokenLanguage {
    'Clear spoken language' = '',
    Abkhazian = 'ab',
    Afar = 'aa',
    Afrikaans = 'af',
    Akan = 'ak',
    Albanian = 'sq',
    Amharic = 'am',
    Arabic = 'ar',
    Aragonese = 'an',
    Armenian = 'hy',
    Assamese = 'as',
    Avaric = 'av',
    Avestan = 'ae',
    Aymara = 'ay',
    Azerbaijani = 'az',
    Bambara = 'bm',
    Bashkir = 'ba',
    Basque = 'eu',
    Belarusian = 'be',
    Bengali = 'bn',
    'Bihari languages' = 'bh',
    Bislama = 'bi',
    Bosnian = 'bs',
    Breton = 'br',
    Bulgarian = 'bg',
    Burmese = 'my',
    'Catalan, Valencian' = 'ca',
    Chamorro = 'ch',
    Chechen = 'ce',
    'Chichewa, Chewa, Nyanja' = 'ny',
    Chinese = 'zh',
    Chuvash = 'cv',
    Cornish = 'kw',
    Corsican = 'co',
    Cree = 'cr',
    Croatian = 'hr',
    Czech = 'cs',
    Danish = 'da',
    'Divehi, Dhivehi, Maldivian' = 'dv',
    'Dutch, Flemish' = 'nl',
    Dzongkha = 'dz',
    English = 'en',
    Esperanto = 'eo',
    Estonian = 'et',
    Ewe = 'ee',
    Faroese = 'fo',
    Fijian = 'fj',
    Finnish = 'fi',
    French = 'fr',
    Fulah = 'ff',
    Galician = 'gl',
    Georgian = 'ka',
    German = 'de',
    'Greek, Modern' = 'el',
    Guarani = 'gn',
    Gujarati = 'gu',
    'Haitian, Haitian Creole' = 'ht',
    Hausa = 'ha',
    Hebrew = 'he',
    Herero = 'hz',
    Hindi = 'hi',
    'Hiri Motu' = 'ho',
    Hungarian = 'hu',
    'Interlingua (International Auxil...' = 'ia',
    Indonesian = 'id',
    'Interlingue, Occidental' = 'ie',
    Irish = 'ga',
    Igbo = 'ig',
    Inupiaq = 'ik',
    Ido = 'io',
    Icelandic = 'is',
    Italian = 'it',
    Inuktitut = 'iu',
    Japanese = 'ja',
    Javanese = 'jv',
    'Kalaallisut, Greenlandic' = 'kl',
    Kannada = 'kn',
    Kanuri = 'kr',
    Kashmiri = 'ks',
    Kazakh = 'kk',
    'Central Khmer' = 'km',
    'Kikuyu, Gikuyu' = 'ki',
    Kinyarwanda = 'rw',
    'Kirghiz, Kyrgyz' = 'ky',
    Komi = 'kv',
    Kongo = 'kg',
    Korean = 'ko',
    Kurdish = 'ku',
    'Kuanyama, Kwanyama' = 'kj',
    Latin = 'la',
    'Luxembourgish, Letzeburgesch' = 'lb',
    Ganda = 'lg',
    'Limburgan, Limburger, Limburgish' = 'li',
    Lingala = 'ln',
    Lao = 'lo',
    Lithuanian = 'lt',
    'Luba-Katanga' = 'lu',
    Latvian = 'lv',
    Manx = 'gv',
    Macedonian = 'mk',
    Malagasy = 'mg',
    Malay = 'ms',
    Malayalam = 'ml',
    Maltese = 'mt',
    Maori = 'mi',
    Marathi = 'mr',
    Marshallese = 'mh',
    Mongolian = 'mn',
    Nauru = 'na',
    'Navajo, Navaho' = 'nv',
    'North Ndebele' = 'nd',
    Nepali = 'ne',
    Ndonga = 'ng',
    'Norwegian Bokmål' = 'nb',
    'Norwegian Nynorsk' = 'nn',
    Norwegian = 'no',
    'Sichuan Yi, Nuosu' = 'ii',
    'South Ndebele' = 'nr',
    Occitan = 'oc',
    Ojibwa = 'oj',
    'Church Slavic, Old Slavonic, Chu...' = 'cu',
    Oromo = 'om',
    Oriya = 'or',
    'Ossetian, Ossetic' = 'os',
    'Punjabi, Panjabi' = 'pa',
    Pali = 'pi',
    Persian = 'fa',
    Polish = 'pl',
    'Pashto, Pushto' = 'ps',
    Portuguese = 'pt',
    Quechua = 'qu',
    Romansh = 'rm',
    Rundi = 'rn',
    'Romanian, Moldavian, Moldovan' = 'ro',
    Russian = 'ru',
    Sanskrit = 'sa',
    Sardinian = 'sc',
    Sindhi = 'sd',
    'Northern Sami' = 'se',
    Samoan = 'sm',
    Sango = 'sg',
    Serbian = 'sr',
    'Gaelic, Scottish Gaelic' = 'gd',
    Shona = 'sn',
    'Sinhala, Sinhalese' = 'si',
    Slovak = 'sk',
    Slovenian = 'sl',
    Somali = 'so',
    'Southern Sotho' = 'st',
    'Spanish, Castilian' = 'es',
    Sundanese = 'su',
    Swahili = 'sw',
    Swati = 'ss',
    Swedish = 'sv',
    Tamil = 'ta',
    Telugu = 'te',
    Tajik = 'tg',
    Thai = 'th',
    Tigrinya = 'ti',
    Tibetan = 'bo',
    Turkmen = 'tk',
    Tagalog = 'tl',
    Tswana = 'tn',
    'Tonga (Tonga Islands)' = 'to',
    Turkish = 'tr',
    Tsonga = 'ts',
    Tatar = 'tt',
    Twi = 'tw',
    Tahitian = 'ty',
    'Uighur, Uyghur' = 'ug',
    Ukrainian = 'uk',
    Urdu = 'ur',
    Uzbek = 'uz',
    Venda = 've',
    Vietnamese = 'vi',
    Volapük = 'vo',
    Walloon = 'wa',
    Welsh = 'cy',
    Wolof = 'wo',
    'Western Frisian' = 'fy',
    Xhosa = 'xh',
    Yiddish = 'yi',
    Yoruba = 'yo',
    'Zhuang, Chuang' = 'za',
    Zulu = 'zu',
}
