async function test(ms) {
    console.log('Hello')
    await sleep(ms)
    console.log('world!')
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

test(2000)
