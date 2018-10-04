
//action for when user clicks on a column
export function dropTile(col) {
    return {
        type: 'DROP_TILE',
        payload: col,
    }
}