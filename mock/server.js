let http = require('http');
let fs = require('fs');
let url = require('url');

// 获取轮播图 /sliders
let sliders = require('./sliders.js');
// 每页显示的数目
let pageSize = 5;
// 封装从book读数据的方法
function read(cb) {
	// 调用readFile
	fs.readFile('./book.json','utf8',function (err,data) {
		// 如果数据为空或者错误 传空数据
		if (err || data.length === 0) {
			cb([]);
		}else{
			// 把读出来的字符串转化成对象传
			cb(JSON.parse(data));
		}
	});
}
// 往book.json写入文件
function write(data,cb) { // data要写入的文件内容 cb写入数据成功后再调用的函数
	// 调用writeFile
	fs.writeFile('./book.json',JSON.stringify(data),cb);
}

http.createServer((req,res) => {
	// 跨越请求
	res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") return res.end();

	let {pathname,query} = url.parse(req.url,true); // true把query转化为对象
	// 限定响应的数目
	if (pathname === '/page') {
		// 获取当前前端传的值
		let offset = parseInt(query.offset) || 0;
		// 获取想要的图书
		read(function (books) {
			let result = books.reverse().slice(offset,offset+pageSize);
			// 默认
			let hasMore = true;
			// 已经显示的数目大于总共条数
			if (books.length <= offset+pageSize) {
				hasMore = false;
			}
			res.setHeader('Content-Type','application/json;charset=utf8');
			res.end(JSON.stringify({hasMore,books:result}));
		});
		return;
	}
 	if (pathname === '/sliders') {
		res.setHeader('Content-Type','application/json;charset=utf8');
		return res.end(JSON.stringify(sliders));
	}
	// 热门图书接口
	if (pathname === '/hot') {
		read(function (books) {
			// 第一个不需要 一般第一个id是老书
			let hot = books.reverse().slice(0,3);
			res.setHeader('Content-Type','application/json;charset=utf8');
			res.end(JSON.stringify(hot));
		});
		return;
	}
	// 可以对书进行增删改查的接口
	if (pathname === '/book') {
		// 获取id号
		let id = parseInt(query.id);
		switch (req.method) {
			case 'GET':
				if (id) { // 查询一个
					read(function (books) {
						// 根据图书的id号查询图书
						let book = books.find(item => item.bookId === id);
						if (!book) book = {};
						res.setHeader('Content-Type','application/json;charset=utf8');
						res.end(JSON.stringify(book));
					});
				}else{ // 查询所有图书
					read(function (books) {
						res.setHeader('Content-Type','application/json;charset=utf8');
						res.end(JSON.stringify(books.reverse()));
					});
				}
				break;
			case 'POST': // 添加
				let str = '';
				req.on('data',function (chunk) {
					str += chunk;
				});
				req.on('data',function () {
					let book = JSON.parse(str);
					read(function (books) {
						// 添加id
						book.bookId = books.length?books[books.length-1].bookId+1:1;
						// 加在books中，books在内存中
						books.push(book);
						// 写进假数据文件中
						write(books,function () {
							res.end(JSON.stringify(book));
						});
					});
				});
				break;
			case 'PUT':  // 修改
				// 获取要修改的id
				if(id){
					let str = '';
					req.on('data',chunk => {
						str += 'chunk';
					});
					req.on('end',() => {
						let book = JSON.parse(str);
						read(function (books) {
							books = books.map(item => {
								// 找到相同的一本书
								if (item.bookId === id) {
									return book;
								}
								return item;
							});
							// 将数据写回json中
							write(books,function () {
								res.end(JSON.stringify(book));
							});
						});
					});
				}
				break;
			case 'DELETE':
				read(function (books) {
					// 过滤掉id不相同的
					books = books.filter(item => item.bookId !== id);
					// 写入内容
					write(books,function (){
						res.end(JSON.stringify({}));
					});
				})
				break;
		}
		return;
	}
}).listen(3000);