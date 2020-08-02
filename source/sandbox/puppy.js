// import '@virtualpatterns/mablung-source-map-support/install'
// import Puppeteer from 'puppeteer'

// import { Transform } from '../index.js'

// const Require = __require

// async function main() {

//   try {

//     let path = Require.resolve('../test/library/resource/case/default.pug')
//     // let module = Transform.createModuleFromPath(path, { 'encoding': 'utf-8', 'flag': 'w' })

//     let browser = await Puppeteer.launch() // { 'product': 'firefox' })

//     try {
    
//       let page = await browser.newPage()
//       await page.goto('http://dumbledore.local:8800/www/index.html')
    
//       let onConsole = null

//       page.on('console', onConsole = (message) => {
//         console.log(message.text())
//       })
      
//       let innerHTML = await page.evaluate(async () => {

//         let virtualFn = null
//         virtualFn = await import('./resource/case/default.pug.js')
//         virtualFn = virtualFn.default || virtualFn

//         let virtualNode = virtualFn({}, { 'createNode': window.CreateNode })
//         let realNode = window.CreateElement(virtualNode[0])

//         let body = null
//         body = document.querySelector('body')
//         body.appendChild(realNode)

//         return body.innerHTML

//       })

//       console.log(`>${innerHTML}<`)

//       // await page.screenshot({ 'path': 'puppy.jpg', 'type': 'jpeg' })

//       page.off('console', onConsole)
//       onConsole = null
      
//     } finally {
//       await browser.close()  
//     }

//   } catch (error) {
//     console.log('-'.repeat(80))
//     console.error(error)
//     console.log('-'.repeat(80))
//   }

// }

// main()
