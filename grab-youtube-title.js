const got = require('got');
const ent = require('ent');

(async () => {
	try {
		const URL = process.argv[2]
		response = await got(URL);
	} catch (error) {
		console.log("No URL or improper URL given");
	}

	const title = response.body.split('<title>')[1].split(' - YouTube</title>')[0];
	console.log("title: " + ent.decode(decodeURIComponent(JSON.parse(('"' + title + '"')))));
	const channel = response.body.split('"author":"')[1].split('"')[0];
	console.log("channel: " + ent.decode(decodeURIComponent(JSON.parse(('"' + channel + '"')))));
	const channel_id = response.body.split('"channelId":"')[1].split('"')[0];
	console.log("channel-id: " + ent.decode(decodeURIComponent(JSON.parse(('"' + channel_id + '"')))));

	// For some videos I am unable to find a username
	try{
		const user = response.body.split('href="http://www.youtube.com/user/')[1].split('"')[0];
		console.log("user: " + ent.decode(decodeURIComponent(JSON.parse(('"' + user + '"')))));
	} catch (error) {
		console.log("user not made public")
	}

	const description = response.body.split('name="description" content="')[1].split('"')[0];
	console.log("description: " + ent.decode(decodeURIComponent(JSON.parse(('"' + description + '"')))));

})();