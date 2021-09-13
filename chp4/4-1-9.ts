// 呼び出しシグネチャの省略記法
// type Log = (message: string, userId?: string) => void

// 完全な呼び出しシグネチャ
// type Log = {
// 	(message: string, userId: string): void
// }

// オーバーロードされた関数・・・複数の呼び出しシグネチャを持つ関数

type Reserve = {
	(from: Date, to: Date, destination: string): Reservation
	(from: Date, destination: string): Reservation
}

let reserve: Reserve = (form: Date, toOrDestination: Date | string, destination?: string) => {
	if (toOrDestination instanceof Date && destination !== undefined) {
		// 宿泊旅行を予約
	} else if (typeof toOrDestination === 'string') {
		//　日帰り旅行を予約
	}
}


