const { Telegraf } = require('telegraf')
const fs = require('fs')

const token = '1858418208:AAEYdcVa3DEScKZd63BGrEa08nj4_hRjtdc'
const bot = new Telegraf(token)

bot.use(async (ctx, next) => {
    console.time(`Processing update ${ctx.update.update_id}`)
    ctx.state.isUseb = true
    await next(ctx) // runs next middleware
    
  })

bot.on('message', (ctx) => {
    console.log(ctx)
})  
bot.start((ctx) => {
    const {state} = ctx
    ctx.reply('Welcome' + state.isUseb)
})
bot.help((ctx) => ctx.reply('Send me a sticker'))

bot.launch().then(res =>{
    console.log('stat')
}).catch(err => {
    console.log(err)
})
