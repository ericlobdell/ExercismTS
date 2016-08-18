
const Isogram = ( word: string ) => {
    return {
        isIsogram: () => {
            return isIsogram( cleanWord( word ) );
        }
    }
}

const cleanWord = ( word: string ) => {
    return word
        .replace( /[-\s]/g, '' )
        .toLowerCase();
}

const isIsogram = ( word: string ) => {
    const unique = word
        .split( '' )
        .filter(( l, i, distinct ) =>
            distinct.indexOf( l ) === i );

    return unique.length === word.length;
}