export const setItem = function(data) {
    let token = data
    if (typeof data === 'object') {
        token = JSON.stringify(data)
    }
    window.localStorage.setItem('token', token)
}
export const getItem = function(data) {
    let token = window.localStorage.getItem('token') ? window.localStorage.getItem('token') : ""
    if (typeof data === 'object') {
        token = JSON.stringify(data)
    }
    console.log("token", token)
    return token ? token : ""
}