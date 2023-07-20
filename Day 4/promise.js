const res = new Promise((reslove, reject) => {
	setTimeout(() => {
		reslove("Foo");
	}, 3000);
});

res.then((res) => console.log(res)).catch((e) => console.log(e));
