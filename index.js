const Router = require('@tsndr/cloudflare-worker-router')
const router = new Router()

router.cors()

router.get('/', (req, res) => {
    res.body = 'Hello World!'
})

addEventListener('fetch', event => {
    event.respondWith(router.handle(event))
})
