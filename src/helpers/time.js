export const getTime = () => {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear()
    const date = `${day}:${month + 1}:${year}`
    return date
}