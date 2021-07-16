const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const i18n = require('i18n')

const PORT = process.env.PORT || 3000
const app = express()

app.set('view engine', 'ejs')

i18n.configure({
    locales: ['lv', 'ru'],
    directory: __dirname + '/locales',
    defaultLocale: 'lv',
    cookie: 'i18n'
})

app.use(cookieParser('LnQbu3gx2!FFW-2je_i.u3j4u8b-VWT_NZvUzvJ_PvtUV'))
app.use(session({
    secret: 'LnQbu3gx2!FFW-2je_i.u3j4u8b-VWT_NZvUzvJ_PvtUV',
    resave: true,
    saveUninitialized: true,
    cookie: {
        sameSite: 'strict',
        maxAge: 60000
    }
}))

app.use(i18n.init)

app.use(express.static(__dirname + '/assets'))

app.get('/', (req, res) => {
    res.render('index',{
        title: 'main'
    })
})
app.get('/about', (req, res) => {
    res.render('about',{
        title: 'about',
        active: 'about'
    })
})
app.get('/products', (req, res) => {
    res.render('products',{
        title: 'products',
        active: 'products'
    })
})
app.get('/findus', (req, res) => {
    res.render('findus',{
        title: 'findus',
        active: 'findus'
    })
})
app.get('/delivery', (req, res) => {
    res.render('delivery',{
        title: 'delivery',
        active: 'delivery'
    })
})
app.get('/firms', (req, res) => {
    res.render('firms', {
        title: 'firms',
        active: 'firms'
    })
})
app.get('/contacts', (req, res) => {
    res.render('contacts', {
        title: 'contacts',
        active: 'contacts'
    })
})

app.get('/products/1', (req, res) => {
    res.render('salads_cha', {
        title: 'salads_cha'
    })
})
app.get('/products/2', (req, res) => {
    res.render('salads_eggplant', {
        title: 'salads_eggplant'
    })
})
app.get('/products/3', (req, res) => {
    res.render('salads_water', {
        title: 'salads_water'
    })
})
app.get('/products/4', (req, res) => {
    res.render('salads_cabbagebeet', {
        title: 'salads_cabbagebeet'
    })
})
app.get('/products/5', (req, res) => {
    res.render('salads_adzhika', {
        title: 'salads_adzhika'
    })
})
app.get('/products/6', (req, res) => {
    res.render('salads_mushr', {
        title: 'salads_mushr'
    })
})
app.get('/products/7', (req, res) => {
    res.render('salads_sote', {
        title: 'salads_sote'
    })
})
app.get('/products/8', (req, res) => {
    res.render('salads_celery', {
        title: 'salads_celery'
    })
})
app.get('/products/9', (req, res) => {
    res.render('salads_trio', {
        title: 'salads_trio'
    })
})
app.get('/products/10', (req, res) => {
    res.render('salads_mini', {
        title: 'salads_mini'
    })
})
app.get('/products/11', (req, res) => {
    res.render('salads_colorcabbage', {
        title: 'salads_colorcabbage'
    })
})
app.get('/products/12', (req, res) => {
    res.render('salads_chimcha', {
        title: 'salads_chimcha'
    })
})
app.get('/products/13', (req, res) => {
    res.render('salads_mushr_white', {
        title: 'salads_mushr_white'
    })
})
app.get('/products/14', (req, res) => {
    res.render('salads_beans', {
        title: 'salads_beans'
    })
})
app.get('/products/15', (req, res) => {
    res.render('salads_cabbage_shafr', {
        title: 'salads_cabbage_shafr'
    })
})
app.get('/products/16', (req, res) => {
    res.render('salads_funzhoza', {
        title: 'salads_funzhoza'
    })
})
app.get('/products/17', (req, res) => {
    res.render('salads_funchozaSha', {
        title: 'salads_funchozaSha'
    })
})
app.get('/products/18', (req, res) => {
    res.render('salads_cabbagePaprika', {
        title: 'salads_cabbagePaprika'
    })
})
app.get('/products/19', (req, res) => {
    res.render('salads_mushr_assort', {
        title: 'salads_mushr_assort'
    })
})
app.get('/products/20', (req, res) => {
    res.render('salads_mushr_bl', {
        title: 'salads_mushr_bl'
    })
})
app.get('/products/21', (req, res) => {
    res.render('salads_vakame', {
        title: 'salads_vakame'
    })
})


app.get('/ru', (req, res) => {
    res.cookie('i18n', 'ru')
    res.redirect(req.get('referer'))
})
app.get('/lv', (req, res) => {
    res.cookie('i18n', 'lv')
    res.redirect(req.get('referer'))
})


app.get('*', (req, res) => {
    res.render('index',{
        title: 'main',
        active: 'main'
    })
})

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}...`)
})