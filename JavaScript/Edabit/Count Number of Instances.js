// https://edabit.com/challenge/7PA4jhWqDYJT4ixLp

class User {
	constructor(username) {
		this.username = username;
		this.constructor.userCount++;
	}
	static userCount = 0;
}
