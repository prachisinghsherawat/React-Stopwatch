

export const Display = ({timer}) => {

    const seconds = `0${( timer %60 )}`.slice(-2)
    const getMinutes = `${ Math.floor(timer/60) }`
    const minutes = `0${( getMinutes %60 )}`.slice(-2)
    const hours = `0${ Math.floor(timer/3600) }`.slice(-2)

    return `${hours} : ${minutes} : ${seconds}`
    
}