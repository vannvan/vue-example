import axios from 'axios'
import store from '@/store'
// create axios
const service = axios.create({
    baseURL: '/api', // api base_url
    timeout: 50000, // timeout,
    headers: { 'Access-Control-Allow-Origin': '*' }
})

const err = (error) => {
    const { status, data } = error.response
    const { errors } = data
    let message = []
    for (let field in errors) {
        message.push(errors[field])
    }
    switch (status) {
        case 400:
            window._VV.$emit('SHOW_SNACKBAR', {
                show: true,
                text: 'Bad Request ' + data.message,
                color: 'red'
            })
            break

        case 422:
            window._VV.$emit('SHOW_SNACKBAR', {
                show: true,
                text: message,
                color: 'red'
            })

            break

        case 401:
            window._VV.$emit('AUTH_FAIELD')
            break

        case 403:
            window._VV.$emit('ACESS_DENIED')
            break
        case 500:
            window._VV.$emit('SERVER_ERROR')
            break

        default:
            break
    }

    return Promise.reject(error)
}

// request interceptor

service.interceptors.request.use((config) => {
    config.headers['Access-Control-Allow-Origin'] = '*'
    config.headers['Content-Type'] = 'application/json'
    config.headers['Authorization'] = 'Bearer ' + store.getters.getAccessToken

    return config
}, err)

// response interceptor

service.interceptors.response.use(({ data, config }) => {
    if (['put', 'post', 'delete', 'patch'].includes(config.method) && data.meta) {
        window._VV.$emit('SHOW_SNACKBAR', {
            text: data.meta.message,
            color: 'success'
        })
    }
    if (data.code !== undefined) {
        window._VV.$emit('API_FAILED', { msg: data.message })
    }

    return data
}, err)

export default service