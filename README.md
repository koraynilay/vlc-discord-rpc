# VLC-RPC
Updated Discord rich presence for VLC media player.

This is a modified version of the [Pigpog/vlc-discord-rpc project](https://github.com/Pigpog/vlc-discord-rpc), which is no longer being actively maintained. We have updated and enhanced the project by adding new features, such as album and show covers. 

![image](https://user-images.githubusercontent.com/61550272/234398623-02c343fa-c500-421c-a7a8-cb4d33f88a81.png)
![image](https://user-images.githubusercontent.com/61550272/234403580-4a910bd7-41a5-4ceb-8a31-180c2efda417.png)

## Support
If you have any issues, that may not be a bug related, or any ideas for the project stop by our [Discord](https://discord.gg/CsKzGpt82s)

## Setup
1. Download the code from this repository, then unzip it.
2. Install [Node.js](https://nodejs.org/en/download).
3. Make an application and get your [Discord Application ID](https://discord.com/developers/applications).
4. Proceed to the next step if you would like to use spotify art, or just go to step 8.
5. OPTIONAL: Retrieve your [Spotify API key](https://developer.spotify.com/documentation/web-api/tutorials/getting-started). 
6. Add both of these values in the `./Storage/config.js` file under the `richPresenceSettings` and `spotify` area if you are choosing to use the album art.
7. In `./Storage/config.js` right before the `spotify` area, set useSpotify to true.
8. Open a terminal, move to the folder you downloaded from this repository, and run `npm i` then run `node .`.

## Detached State
1. Open VLC.
2. Select Tools in the top menu bar.
3. Select Preferences.
4. At the bottom left, select all.
5. Select Main Interfaces.
6. Check the box labelled Web.
7. Back where we selected Main Interfaces, select the caret next to it.
8. Select Lua.
9. Enter a password into the Lua HTTP box. It does not matter what this is, but you will need to add it to your config.
10. Update any needed values in your config. Change detached to true. You MUST set your own password and make sure to include it in VLC.
11. Start VLC, then run the program as normal.
![image](https://github.com/vlc-rpc/vlc-discord-rpc/assets/61550272/4aa489d9-269c-4333-b595-bb3d0444fa24)
![image](https://github.com/vlc-rpc/vlc-discord-rpc/assets/61550272/292e8748-b6c6-4ff8-88a5-225e5dd2b467)

Note: Do not touch the port or address unless you know what you are doing! 8080 is VLC's default HTTP port. 

## Custom Images
### URL Method
If you would like to change the default icons for pause, play, or VLC in your discord status, you will need to have a link to an image (which must end in .png, .jpg, or something similar). You can do this by using imgur, or any site of your choosing. Then, simply replace the link in the iconNames part of the config.js.

### File method
To use an uploaded file instead of a link you need to do the following:
1) Sign in to the [Discord Developer Portal](https://discord.com/developers/applications)
2) Go to your application you created during setup
3) On the left sidebar, click Rich Presence
4) You should be under the Art Assets section, but if not click the Art Assets button
5) Add your images, and choose names for them.
6) Go into your config.js, and under the iconNames section, set the icon to the name you choose for your image.
7) Give it a minute or two, and then you should see it working. For other users, it may take a few hours for your images to show up.
![image](https://github.com/vlc-rpc/vlc-discord-rpc/assets/61550272/692b569e-7483-45a6-9ec8-0961c21f947e)
![image](https://github.com/vlc-rpc/vlc-discord-rpc/assets/61550272/cd84551e-0437-40ec-95ed-5dbd76968a7a)


