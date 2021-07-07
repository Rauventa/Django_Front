export const convertDate = (data) => {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    const d = new Date(data)
    return [d.getFullYear(), pad(d.getMonth()+1), pad(d.getDate())].join('-')
}