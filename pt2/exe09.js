function formatValue(data) {
    if (typeof data === 'string') {
        return data.toUpperCase();
    }
    return Number(data.toFixed(2));
}
console.log(formatValue(5));
console.log(formatValue('vicente'));
