function greet(name: string) {
	return name
}

type Greet = (name: string) => string

type Log = (message: string, userId?: string) => void

const log: Log = (message, userId = 'Not Signed in') => {
	const time = new Date().toISOString();
	console.log(time, message, userId);
}
