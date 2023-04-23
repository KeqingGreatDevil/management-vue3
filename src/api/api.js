import serve from "./request";

export const getTableList = () => {
    return serve({
        method: 'GET',
        url: '/home/getHomeData'
    })
}
export const getCountList = () => {
    return serve({
        method: 'GET',
        url: '/home/getCountData'
    })
}