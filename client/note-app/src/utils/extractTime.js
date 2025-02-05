export default function extractTime(dateString) {
    const date = new Date(dateString);
    const hours = zeroEnsure(date.getHours());
    const minutes = zeroEnsure(date.getMinutes());
    const day = zeroEnsure(date.getDate());
    const month = zeroEnsure(date.getMonth() + 1);
    const year = date.getFullYear();

    return `${hours}:${minutes} ${day}.${month}.${year}`;
};

function zeroEnsure(number) {
    return number.toString().padStart(2, "0");
};