export function getTotalPrice( base = 0, item ) {
    return base + ( item.price  * item.quantity );
}