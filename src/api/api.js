import serve from "./request";

export const getTableList = () => {
    return serve({
        method: 'GET',
        url: '/home/getData'
    })
}