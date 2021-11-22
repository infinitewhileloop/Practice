// https://javascript.info/regexp-alternation#find-bbtag-pairs

let regexp = /\[(b|url|quote)\].*?\[\/\1\]/gs;
