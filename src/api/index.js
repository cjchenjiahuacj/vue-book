import axios from 'axios';

// 增加默认请求的路径
axios.defaults.baseURL = 'http://localhost:3000';
// 统一处理返回的数据
axios.interceptors.response.use((res) => {
	// 统一拦截返回结果 控制返回格式
	return res.data;
});
// 获取轮播图数据 返回promise对象
export let getSliders = () => {
	return axios.get('/sliders');
}

//获取热门图书的接口
export let getHotBooks = () =>{
	return axios.get('/hot');
}
// 获取全部图书
export let getBooks = () => {
	return axios.get('/book');
}
// 列表项删除一本图书
export let removeBook = (id) =>{
	return axios.delete(`/book?id=${id}`);
}
// 获取某一本书
export let findOneBook = (id) => {
	return axios.get(`/book?id=${id}`);
}
// 修改图书
export let updateBook = (id,data) =>{
	return axios.put(`/book?id=${id}`,data);
}
// 添加图书
export let addBook = (data) => {
	return axios.post('/book',data);
}

// 获取全部
export let getAll = () => {
	return axios.all([getSliders(),getHotBooks()]);
}

// 获取分页
export let pagitation = () =>{
	return axios.get(`/page?offset=${offset}`);
}