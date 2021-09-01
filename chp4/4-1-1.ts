// オプショナル
// function log(message: string, userId?: string) {
// 	let time = new Date().toLocaleTimeString()
// 	console.log(time, message, userId || 'Not signed in')
// }

// デフォルトパラメータ
type Context = {
	appId?: string
	userId?: string
}

function log(message: string, context: Context = {}) {
	let time = new Date().toISOString()
	console.log(time, message, context.userId)
}

log('Page loaded')
log('User signed in')
