// https://edabit.com/challenge/XcfmvhpRp4t3tQWG2

function uniqueStyles(albums) {

    const flattenedAlbums = albums.map(x => x.split(',')).flat().map(x => x.trim());
    const uniqAlbums = new Set(flattenedAlbums);
    return uniqAlbums.size;
}
