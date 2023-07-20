function task1() {
	console.log("task1");
}

function task2(task) {
	console.log("task2");
	return task();
}

task2(task1);

let msg = task2(() => "hello");
console.log(msg);
