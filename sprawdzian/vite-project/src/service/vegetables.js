let vegetables = null
let lastId = 8;

export async function downloadVegetables() {
    if (vegetables) return vegetables
    const response = await fetch('/data.json')
    if (!response.ok) throw new Error('Błąd serwera: ' + response.status)
    vegetables = await response.json()
    return vegetables
}

export function deleteVegetables(id) {
    vegetables = vegetables.filter(vegetable =>vegetable.id != id)
    return vegetables
}

export function newVegetableId() {
    lastId++;
    return lastId
}
