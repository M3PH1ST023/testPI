// comparing the actual data and expected data also with data types
export const compareJson = (actual, expected) => {
    for (let key in expected) {
        if (
            actual[key] !== expected[key] &&
            typeof actual[key] !== typeof expected[key]
        ) {
            return false;
        }
    }
    return true;
};
