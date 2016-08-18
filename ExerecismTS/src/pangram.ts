
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u','v', 'w', 'x', 'y', 'z'];

const Pangram = ( sentence : string ) => {
    return {
        isPangram: () => {
            return letters.every( l =>
                sentence.toLowerCase().indexOf( l ) !== -1 );
        }
    }
}
