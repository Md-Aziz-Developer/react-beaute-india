export const removeHtmlTags = (str) => {
    if (str) {
        const regex = /(<([^>]+)>)/ig;
        // const regex = /<(?:.|\n)*?>/gm
        return str.replace(regex, '');
    }
    return str;
}

export const toJson = (string) => {
    try {
        return JSON.parse(string)
    } catch (_) {
        return undefined
    }
}