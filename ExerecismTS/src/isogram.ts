
function Isogram( word: string ) {
    return {
        isIsogram: function () {
            return isIsogram( cleanWord( word ) );
        }
    }
}

function cleanWord( word: string ): string {
    return word
        .replace( /[-\s]/g, '' )
        .toLowerCase();
}

function isIsogram( word: string ): boolean {
    const unique = [];

    word.split( '' )
        .forEach( l => {
            if ( unique.indexOf( l ) === -1 )
                unique.push( l );
        });

    return unique.length === word.length;
}