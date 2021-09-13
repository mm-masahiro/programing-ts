type User = {
	name: string;
	age: number;
	private: boolean;
}

function showUserInfo(user: User) {
	console.log(user);
}

// 使用例
showUserInfo({
	name: 'John Smith',
	age: 16,
	private: false,
});

showUserInfo({
	name: 'Paul',
	age: 18,
	private: true,
});
