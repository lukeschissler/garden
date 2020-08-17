export function formatDate() {
    const date = new Date();
    const formattedDate = date.getMonth().toString().concat('/', date.getDate());
    return formattedDate
}
