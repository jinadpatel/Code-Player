function updateOutput(){
             $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>"+$("#htmlPanel").val()+"</body></html>");
            
            document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
            
            
        }
        $(".toggleButton").hover(function(){
            $(this).addClass("highlightedButton");
        }, function(){
            $(this).removeClass("highlightedButton")
            
        });    
          $(".toggleButton").click(function(){
              $(this).toggleClass("active");
             $(this).removeClass("highlightedButton");
              
              var panelId = $(this).attr("id") + "Panel";
              
              $("#"+panelId).toggleClass("hidden");
              //logic to set all the panels in the same screen
              var activePanels = 4 - $("hidden").length;
              $(".panel").width(($(window).width()/activePanels)-10);
              
          });
        $("textarea").height($(window).height() - $("#header").height()-25);
        $(".panel").width(($(window).width()/2)-12);
        
        $("textarea").on("change keyup paste", function(){
           updateOutput();
        });