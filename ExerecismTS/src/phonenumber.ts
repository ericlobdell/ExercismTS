
const PhoneNumber = ( number ) => {
    return {
        number: () => getPhoneNumber( number ),
        toString: () => parsePhoneNumber( number ),
        areaCode: () => getAreaCode( number )
    }
}

const getPhoneNumber = ( number: string ) => {
    let clean = number.replace( /[\(\)\s-\.]/g, '' );

    if ( clean.length === 11 && +clean[0] === 1 )
        clean = clean.substr( 1 );

    return clean.length === 10 ? clean : '0000000000';
}

const getAreaCode = ( number: string ) => {
    return number.substr( 0, 3 );
}

const parsePhoneNumber = ( number: string ) => {
    const areaCode = getAreaCode( number );
    const firstThree = number.substr( 3, 3 );
    const lastFour = number.substr( 6, 4 );

    return `(${areaCode}) ${firstThree}-${lastFour}`;
}