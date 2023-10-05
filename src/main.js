import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Ranch Soundboard',
		imgpath: '/pics/Untitled.png'
	}
});

export default app;