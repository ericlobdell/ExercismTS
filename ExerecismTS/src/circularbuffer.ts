
const circularBuffer = ( maxItemCount ) => {
    return new CircularBuffer( maxItemCount );
}

class CircularBuffer {
    private items = [];

    constructor( private maxItems: number ) { }   

    read() {
        if (this.items.length === 0)
            bufferEmptyException();

        return this.items.shift();
    }

    write( item: any, force : boolean = false ) {
        const items = this.items;

        if ( !item )
            return;

        if ( items.length === this.maxItems && !force )
            bufferEmptyException();

        if ( items.length < this.maxItems )
            this.items.push( item );
        else {
            const tail = items.slice( 1 );
            this.items = [...tail, item];
        }     
    }

    forceWrite( item: any ) {
        this.write( item, true );
    }

    clear() {
        this.items = [];
    }
}

const bufferEmptyException = () => {
    throw new Error( "Boom!" );
}