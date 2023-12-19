export const getTime = (adsDate) => {
    const adsY = adsDate.substr(0, 4)
    const adsTime = adsDate.substr(11, 5)
    const adsM = adsDate.substr(5, 2)
    const adsD = adsDate.substr(8, 2)
    const now = new Date()
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear()
    if(adsY == year && adsM == month && adsD == day) {
        return `Сегодня в ${adsTime}`
    } else {
        return `${adsD}.${adsM}.${adsY}`
    }
    
}