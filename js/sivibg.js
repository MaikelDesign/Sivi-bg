/*
 *  Sivi-bg - v0.0.1
 *  Simple Javascript framework for video backgrounds.
 *
 *  Made by Maikel Verbeek
 *  Under MIT License
 */
(function(window){
    
    var fn = function(){
        
        //Create library object
        var sivi = {};
        
        //Define variable
        var place, $wrapper, $wrapper_style, $video, videoTag = '';
        
        // Create video function
        // @params (video id, video settings) id, settings
        // @return (Object||String) sivi
        sivi.video = function(id, settings){
            
            // Check if id is set
            // (Y) place wrapper
            // (N) No video path
            if(id != ''){
                
                // Get locations DIV element
                place = document.getElementById(id);

                // Set video wrapper style
                $wrapper_style = 
                    'position: absolute;'+
                    'z-index: 1;'+
                    'top: 0;'+
                    'left: 0;'+
                    'right: 0;'+
                    'bottom: 0;'+
                    'overflow: hidden;';

                // Create video tag
                // @param (video settings object) settings
                // @return (String) $video
                videoTag = function(settings){

                    var video_style, video_settings, split, source, extension, video_url, poster, poster_option ='';

                        // Default video-tag settings
                        video_settings =
                            'width="auto" '+
                            'height= "100%" ';


                        // Loop through custom video settings
                        // Filter unwanted settings
                        // if option = true -> push to video_settings
                        // if key = poster -> set poster varaible
                        // if key = src -> set video_url
                        for(var key in settings){
                            if(key == 'poster'){
                                poster = settings[key];
                            }
                            if(key == 'src'){
                                video_url = settings[key];
                            }
                            if(settings[key] == true  
                                    && key != 'controls'
                                    && key != 'height'
                                    && key != 'width'
                                    && key != 'preload'
                                    && key != 'src'
                                   ){
                                video_settings += (key+' ');
                            }
                        }

                        // Default video-tag style
                        video_style = 
                            'margin: auto;';

                        // Get video extension
                        split = video_url.split(".");
                        extension = split[split.length-1];

                        // Check which source to use
                        if(extension == 'mp4'){
                            source = '<source src="' + video_url + '" type="video/mp4">'; 
                        }
                        if(extension == 'ogv'){
                            source = '<source src="' + video_url + '" type="video/ogv">'; 
                        }
                        if(extension == 'webm'){
                            source = '<source src="' + video_url + '" type="video/webm">';
                        }

                        // Check if poster is set and a string
                        // -> add poster to video_settings
                        if(poster != '' && typeof poster == 'string'){
                            poster_option = 'poster="' + poster + '" ';
                            video_settings += poster_option;
                        }

                        // Set video tag with different settings
                        // Return $video
                        return $video = '<video id="sivi-video" ' + video_settings + ' style="' + video_style + '">'+ source +'</video>';
                }


                // Create video wrapper 
                // Add video tag
                // Place in body
                $wrapper = '<div id="sivi-wrapper" style="'+ $wrapper_style +'">'+ videoTag(settings) +'</div>';
                place.innerHTML = $wrapper;
                
            }else{
                alert('Path to video is empty!');
            }
        }

        return sivi;
    }
    
    // Check if library is defined
    if(typeof(sivi) === 'undefined'){
        window.sivi = fn();
    }
    else{
        alert('library already defined!');    
    }
    
})(window);


