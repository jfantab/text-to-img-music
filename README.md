# text-to-img-music

## Introduction

This repository will hold the React Native app that will host our text-to-image and text-to-music capabilities.

To run the app, follow these steps:

```
cd app
npm install
npx expo start
```

I created components in order to modularize the architecture. There are two main screens: Home screen and Results screen.

The Home screen consists of a `TextContainer` and a `CustomButton`. Pressing the button sends a request to the two Flask servers hosted on Google Colab.

Once the requests return, the Results screen shows the image (stored in `ImageContainer`) and two buttons (`AudioContainer`s) to play the generated music and text-to-speech sample. 

## Inference

The first step is to start the MusicGen, Stable Diffusion, and Text-to-Speech Google Colab notebooks. Currently, we manually copy-paste the ngrok endpoints into the `components/HomeScreen/index.js` file.

After that, you can type in a sentence into the text box and tap submit and wait for the results!
