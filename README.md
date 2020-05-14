# Drum Machine

This is a simple drum machine/sequencer that is similar to a basic sample pad. There are currently only 3 tracks (hihat, snare, kick) but I am planning on allowing the user to create new tracks, as well as update the sound library.

![Drum Machine App](/images/drum-machine-app.png)

## Interact

The easiest way to get started is by [opening the app](https://kmulqueen.github.io/drum-machine/), click on some random pads, and then press play! From there see what you can create. See below for further documentation.

## Docs

### Pads

Users are able to select the number of pads that will be played per measure from the dropdown menu labeled "Number of Pads", and then activate the pads by clicking them.

![Drum Machine Controls](/images/drum-machine-controls.png)

Click the pads to toggle between active/inactive. When a pad is active it becomes darker in appearance and will play the track audio in rhythm if the "play" button has been pressed. If a pad is inactive it is lighter in appearance and the track audio for that pad will not play.

![Drum Machine Pads](/images/drum-machine-pads-active-inactive.png)

### Play/Stop

The green "play" button will turn the drum machine on and start playing the audio in rhythm. Once the green "play" button is pressed, it's appearance changes into a red "stop" button.

![Drum Machine Controls](/images/drum-machine-controls.png)
![Drum Machine Controls](/images/drum-machine-controls-stop.png)

The stop button will stop the audio, and then it's appearance will change back to the green "play" button. If the audio has been stopped, when play is pressed again the audio will resume where it was last stopped at.

### Tempo

There is a tempo slider that controls the tempo/speed of the pattern. The tempo can be adjusted between 30-450 BPM by sliding the tempo slider left or right, and fine tuned using the left and right arrow keys to decrease or increase the speed to the desired tempo.

![Drum Machine Controls](/images/drum-machine-controls.png)

### Active Beat Visualization

This is a visual guide that is synchronized to the tempo of the drum machine to help users see exactly where they are in the pattern in musical time. As the drum machine is looping through the tracks in rhythm, the current or active beat is visually emphasized by **slightly enlarging the pads that fall on the current beat.**

### Mute Track

Toggle between mute/unmute on each track separately by clicking on the light gray "mute track" button located to the right of the track title. When a track is muted, the mute track button becomes red and the audio from the active pads on the track will not play. When a track is not muted, the mute track button is light gray and the audio will play as normal.

![Drum Machine Controls](/images/drum-machine-track-controls.png)

### Track Sound Selection

Users can select different sounds for each track through the track sound selection dropdown located to the right of the mute track button.

![Drum Machine Controls](/images/drum-machine-sound-select.png)

## Tech Used

HTML5, HTML5 Audio, CSS3, CSS3 Animations, JavaScript
