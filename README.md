# FitbitHUD

Update: 3-21-23
> Though I don't plan on finishing this project, I don't need to anymore! I successfully hacked (hardware and firmware, maybe or maybe not including a literal hacksaw, haha!) the Moverio BT-200 I got on ebay for pretty dang cheap. Long story short, I cut it in half, mounted it to my glasses, and am currently in progress working on integrating it with a Jetson Nano via VNC for AI/ML applications on-the-go (i.e., AI/ML assistant; current plan is to start off with resources from the github of OpenAI, then work on building my own models derived from their work/papers/etc, which I already have several plans for [oh, why must time be our most fleeting resource?]). I rooted the Android system which drives the display, and am currently working on finishing deployment of an ad-hoc/hotspot network to connect the Jetson Nano with the Moverio (so that I can use a VNC connec ion to use the Moverio as a screen for the Jetson Nano on-the-go for portable AI/ML applications and development) which is going along (relatively) smoothly (I currently have the VNC connection working, as well as the hotspot via the Jetson Nano--now all I have to do is get the VNC working between the two while having the Jetson Nano act as a WiFi access point for the Moverio [which has proven to be rather troublesome; I now need to figure out how to get the Moverio to recognize the Jetson Nano as not just an access point, but as a device connected to the network of said access point as well, so they can communicate like regular computers over LAN]).

Update: 1-7-23
> I never ended up finishing this (version of the) project (for several reasons, including the fact that I am soon to start work on a new version of a HUD which includes hacking an Epson Moverio BT-200 I got a deal on on eBay; can't wait to get started on that!), and this repo is now defunct. The general idea for how I was going to implement this all here should theoretically still be possible, but a lot of work would still need to be done. The WebRTC API (which I was going to use for video transmission to the Fitbit, to use it as a remote screen sorta thing) is/was too big to fit in the memory of the Fitbit, and due to the nature of said API, it isn't (supposed to be) able to be used as parts of a whole (ie, only using some of the files from the API rather than the whole). Thus, in order to get this particular idea to work, some hacking needs to be done in regards to the WebRTC API and the Fitbit API in order to get them to function as intended, which would likely be very time consuming (there inlies the issue). I've been quite busy with things (ie, school, other projects, etc.), so (at least as of right now), I don't really have any intentions of coming back to work on this (at least, not any time too soon). Anyways, if anyone has any questions or anything about this, feel free to let me know! I'm always open to conversation about such things.

App for use on a Fitbit Versa 2 to work as a basis for a Heads Up Display (HUD).

Currently in early development, working on getting streaming video for camera passthrough at the moment.

Other use cases are planned, such as an inset terminal GUI, among other things.

Also using this as a project for me to learn some of the fundamentals of working with Javascript.

Here's the general idea for what I wanna do here:
> I plan to use my Fitbit Versa 2 watch (along with a 3d printed chassis to hold all the components together
> that I plan to design in the future) as a Heads Up Display (HUD). My plan with this in this case was to utilize the
> WebRTC library to manage communication between the Fitbit Versa 2 watch app/companion (what runs on the phone) app
> and something along the lines of a Raspberry Pi Zero W 2 and/or a ESP32 camera so as to stream the camera's picture 
> data to the watch and potentially add (an) overlay(s), along with other features (such as zooming in; actually, the
> original inspiration for the whole Fitbit HUD thing was because I wanted to be able to "zoom in" my vision in class
> to get a better view of the board, lol).

