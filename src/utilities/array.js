const check = (array, id) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id == id) {
            return true;
        }
    }
    return false;
}

const find = (array, key, value) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i][key] == value) {
            return array[i];
        }
    }
    return null;
}

const toArray = (string, separator) => {
    const array = string.split(separator)
    for (let i = 0; i < array.length; i++) {
        if (array[i] == '') {
            array.splice(i, 1);
        }
    }
    return array
}

const array = {
    check, find, toArray
}

export default array