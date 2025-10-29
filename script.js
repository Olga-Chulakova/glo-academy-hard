const variable = ' яблоко упало с дерева на землю и раскололось '

const getTextFormat = function (value) {
    if (typeof value != 'string') {
        return "Значение должно быть строкой"
    }

    const trimmed = value.trim();
    if (trimmed.length > 30) {
        return trimmed.slice(0, 30) + '...';
    }

    return trimmed
}

console.log(getTextFormat(variable));