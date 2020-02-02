---
layout: post
title: Event recording field notes
date: 2018-11-23 19:26:29 +0300
comments: true
categories: [Community, Events]
---

Here are my notes about low-budget event recording setups for small local tech events that want to reach global audiences.

<!-- more -->

## Goals

- We want local events to reach a global audience
- Livestream should be easy to set up
- Recordings should be built-in, not extra work
- As little post-production as possible

Non-goals:

- It's ok if the video & audio isn't pro-level quality.
- It's ok if our setup doesn't allow for much post-production.

## Equipment

- **Webcam**, Logitech C922/C920 or other 1080p autofocus & auto luminosity adjustment
- **Tripod for the webcam** – ideally a 1-2m adjustable photo tripod placed in the room in front of the speaker
- **Microphone**, Zoom H5 or other – with USB output not XLR no amp needed
- **Microphone stand or tripod** – a small 5-20cm stand/tripod, most likely placed on the speaker stand/table
- **USB extension cables** for those two, 3+m ideally (at least one for the mic, camera not strictly required)
- **Computer** with good internet connection, charger, at least 2 USB ports (power extension if necessary)
- **External microphone**, Jabra or equivalent to get questions from the room (computer needs 3 USB ports then)
- **Headphones** to monitor sound from the stream during the event

Additionally:

- **Speaker stand/table**, that can accommodate both the speaker's own laptop and the microphone
- **Somewhere to put the recording computer** 😅 depending on layout of the room and length of the cables for the various devices

Out of all of these I think the webcam is the most critical, so it also wouldn't hurt to have a backup plan for it in case it fails for whatever reasons – a spare one, a smartphone that can be hooked to a computer as a video input device. For example 480p YouTube Live straight from an iPhone.

## Software & platform

- [OBS](https://obsproject.com/)
- [YouTube Live](https://www.youtube.com/live)

Why YouTube?

- Same setup for all events regardless of attendance and whether it's internal or public
- Fits well with G Suite accounts – use G Suite permission system to limit the visibility of the video, and also to give admin rights to the production side of YouTube

## Other options

- Twitch
- Google Meet / Google Hangouts

## What doesn't work well

- If recording with YouTube only, downloading videos for backup is tedious.
- Private livestreams cannot use the chat. Can use Slack threads instead.
- The streaming/recording setup is quite a stressful thing to look after. Lots of things can go wrong, and prevent current and future participants from enjoying the event (sound, video, network, etc)

### The DSLR lessons

Using a DSLR instead of a Webcam sounds great, right? In the hands of a pro I'm sure the DSLR + Zoom H5 would fare better, but for me, the iPhone's output was actually _better_ video-wise and "good enough" for the audio. In particular I think the iPhone has built-in background noise reduction, and better dynamic contrast for the video. Means less post-production.

Things that went wrong with the DSLR + Zoom setup:

- Took me hours to sync the audio & video, then re-export everything
- The Zoom was right on top of the camera, so we can hear the camera's fan (took me 3hrs of recording to figure this out)
- The camera battery only lasts ± 2hrs of video
- Can't charge the camera and record at the same time
- Can't swap the battery easily when it dies, because the Zoom was right on top and I didn't want to destroy the audio
- I'm too noob to adjust the camera correctly for the poor lighting

Up next – explore streaming from a smartphone only (YouTube app + smartphone-compatible mic), so more people can do livestreams with minimal hardware and without learning OBS

## Capture cards

Something that can drastically improve the quality of the footage is to use a capture card, e.g. elgato HD60+, so the presentation is much sharper. Then overlay the video with OBS. This has worked really well but doesn’t seem to be Mac-friendly.

## Resources

- https://www.vincit.fi/blog/stream-events-vincit/
