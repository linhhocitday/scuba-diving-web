export const apiUrl = 'https://648704a8beba6297278faca3.mockapi.io/';
export const endPoint = {
	diving: 'diving'
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
		console.log(error)
	}
}

export async function removeLoader() {
	document.querySelectorAll('.loader').forEach(loader => {
		setTimeout(() => {
			loader.remove()
		}, 1800);
	});
}

export let fish = [
	{
		name: 'Nemo',
		image: 'assets/images/slide4_fish1.jpg',
		intro: 'Or we normally call “clownfish”. Depending on the species, clownfish are overall yellow, orange, or a reddish or blackish color, and many show white bars or patches.'
	},
	{
		name: 'Dory',
		image: 'assets/images/slide4_fish2.jpg',
		intro: 'Blue tangs are small fish native to coral reefs in the Indo-Pacific. The animals are easy to spot, thanks to their characteristically vibrant colorations of royal blue and canary yellow.'
	},
	{
		name: 'Gill',
		image: 'assets/images/slide4_fish3.webp',
		intro: 'The Moorish Idol has a very long, white, sickle-shaped dorsal fin, two broad black bars on the body, and a yellow saddle across the snout. There is a small, bony projection in front of both eyes of adults.'
	}
]

