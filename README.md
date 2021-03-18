# grab-youtube-title
Grabs the title, description, and channel info of a given youtube video

## Dependencies
[got](https://github.com/sindresorhus/got) and [ent](https://github.com/substack/node-ent)

## Examples
```
node grab-youtube-title.js https://youtu.be/5hVmeOCJjOU
```
```
title: A Brief History of Quantum Mechanics - with Sean Carroll
channel: The Royal Institution
channel-id: UCYeF244yNGuFefuFKqxIAXw
user: TheRoyalInstitution
description: The mysterious world of quantum mechanics has mystified scientists for decades. But this mind-bending theory is the best explanation of reality that we have....
```
Some channels appear to have their usernames hidden
```
node grab-youtube-title.js https://www.youtube.com/watch?v=sVmdMpsdNAY
```
```
title: This picture should not be in here
channel: GMHikaru
channel-id: UCweCc7bSMX5J4jEH7HFImng
user not made public
description: Hikaru faces his greatest foe, the organizer of the photos for photoguessr. The photos in the second episode of Photoguessr are all taken by the one and only...
```
