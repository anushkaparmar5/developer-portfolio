export const titleCase = (str, key = null) => {
    try {
        if (!str)
            return null;
        const text = str.replace(/_/g, " ").split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)?.toLowerCase()).join(' ');
        return key === "And" ? text.replace("And", "&") : text;
    } catch (error) {
        console.error(error)
        return null;
    }
};

