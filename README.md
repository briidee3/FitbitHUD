# FitbitHUD

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

*This project is currently on hold (as you may have noticed), however, I do plan to return to it (relatively) soon*
