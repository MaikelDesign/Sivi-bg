Sivi-bg
====

Simple Javascript Framework for video backgrounds.

## Notes 

* Works with all modern browsers
* IOS devices shows posters only
* (check android)

## Instructions

Download it from [GitHub](https://github.com/VodkaBears/Vide/releases/latest).

Include Framework: 
```html 
<script src="js/library.min.js" ></script>
```

Prepare your video in formats for cross browser compatibility (.mp4 - .webm - .ogg). 
Check http://caniuse.com for browser compatibility.
Also add a poster with `.jpg`, `.gif` or `.png` extension:

```
path/
├── to/
│   ├── video.mp4
│   ├── video.ogv
│   ├── video.webm
│   └── video.jpg
```

Add this div tag with the id set to 'vide-bg' to your body. Place it at the top of your code.
```html 
<div id='vide-bg'></div>
``` 
This div is the container that contains the video tag.

## Options

Add the following JS code in the custom Javascript file. 
```js
    library.video('vide-bg',{
        src: 'video/ocean.mp4',
        autoplay: true,
        loop: true,
        muted: true,
        poster: 'video/ocean.jpg',
    }); 
```
This will allow you to adjust the settings.
By default the video will be looped, muted and starts automatically. 
Also you can seth the path to the video and poster.

## License

The MIT License (MIT)

Copyright (c) 2015 Maikel Verbeek

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


