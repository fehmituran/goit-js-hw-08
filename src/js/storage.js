
export const save = (key, value) => {
    try {
        const data = JSON.stringify(value);
        localStorage.setItem(key, data);

    } catch (error) {
        console.log(error.message)
    }
};

export const load = (key) => {
    try {
        const data = localStorage.getItem(key);
        return data === null ? "" : JSON.parse(data);
    } catch (error) {
        console.log(error.message)
    }
};

export const remove = (key) => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.log(error.message)
    }
}