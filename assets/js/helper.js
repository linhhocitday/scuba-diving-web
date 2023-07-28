export const apiUrl = 'https://648704a8beba6297278faca3.mockapi.io/';
export const endPoint = {
	diving: 'diving',
	product: 'product'
}

export async function fetchData(params) {
	if (!params) {
		alert('không tồn tại request');
		return false;
	}
	let {apiUrl, endPoint, method, callback} = params;
	
	try {
		let res = await fetch(apiUrl + endPoint, {
			method: method
		});

		let data = await res.json();
		await callback(data);
	}
	catch(error) {
		console.log(error);
	}
}

export async function removeLoader() {
	document.querySelectorAll('.loader').forEach(loader => {
		setTimeout(() => {
			loader.remove();
		}, 1800);
	});
}

