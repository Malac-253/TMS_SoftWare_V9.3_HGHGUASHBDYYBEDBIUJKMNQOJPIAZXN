$(function(){
          if ('speechSynthesis' in window) {
            speechSynthesis.onvoiceschanged = function() {
              var $voicelist = $('#voices');

              if($voicelist.find('option').length == 0) {
                speechSynthesis.getVoices().forEach(function(voice, index) {
                  var $option = $('<option>')
                  .val(index)
                  .html(voice.name + (voice.default ? ' (default)' :''));

                  $voicelist.append($option);
                });

                $voicelist.material_select();
              }
            }

            $('#speak').click(function(){
                console.log()
              var text = $('#message').val();
              var msg = new SpeechSynthesisUtterance();
              var voices = window.speechSynthesis.getVoices();
                console.log("voices",voices)
              //msg.voice = voices[$('#voices').val()];
                msg.voice = voices[5]
              msg.rate = $('#rate').val() / 10;
              msg.pitch = $('#pitch').val();
              msg.text = text;
                console.log("Start ------- ")
                console.log("msg",msg)
                console.log("msg.voice",msg.voice)
                console.log("msg.rate",msg.rate)
                console.log("msg.pitch",msg.pitch)
                console.log("msg.text",msg.text)
            
            msg.onstart = function(e) { 
                console.log("Start") 
                console.log("onstart",e)
            } 
             
            msg.onerror = function(e) {
                console.log("Start")
                console.log("onerror",e)
            }
                
            msg.onend = function(e) {
                console.log('Finished in ' + event.elapsedTime + ' seconds.');
                console.log("finsh")
                console.log("onend",e)
              };
            
            console.log("Before")   
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(msg);
            console.log("After")
                
            var allVoices = window.speechSynthesis.getVoices();
            var tester = new SpeechSynthesisUtterance(); 
                tester.voice = allVoices[5]
                tester.rate = 1
                tester.pitch = 1
                tester.text = "testing";
            
            console.log("Before")  
            speechSynthesis.speak(tester); 
            console.log("After")    
            })
             
              
          } else {
            $('#modal1').openModal();
          }
        });