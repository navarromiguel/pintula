
var Pintula = function(){
    this.canvas = undefined;
    this.ctx = undefined;
    this.canvas_h = undefined;
    this.canvas_w = undefined
    this.canvas = undefined;
    this.setUp = undefined;
    this.draw = undefined;
    this.width = 0;
    this.height = 0;
    
    
    this.init = function() {
        this.canvas = document.getElementById('micanvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas_h = parseInt(this.canvas.getAttribute("height"));
        this.canvas_w = parseInt(this.canvas.getAttribute("width"));

        this.mouseX = undefined;
        this.mouseY = undefined;

        this.setMousePosition = function(e) {
          var canvas_pos = this.getPosition(this.canvas);
          this.mouseX = e.clientX - canvas_pos.x;
          this.mouseY = e.clientY - canvas_pos.y;
        }

        this.setUp = function(){
            this.drawCanvas();
            this.canvas.addEventListener("mousemove", this.setMousePosition.bind(this), false);
            this.width = 5;
            this.height = 5;
            setInterval(this.draw.bind(this), 20);
        }

        this.draw = function(){
            if(this.mouseX && this.mouseY){
                this.ctx.fillRect(this.mouseX,this.mouseY, this.width, this.height);
            }
        }
        
        this.drawCanvas = function(){
            this.ctx.strokeRect(0, 0, this.canvas_w, this.canvas_h);
        }


        this.getPosition = function(el) {
          var xPosition = 0;
          var yPosition = 0;

          while (el) {
            xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
            yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
            el = el.offsetParent;
          }
          return {
            x: xPosition,
            y: yPosition
          };
        } 
        
        this.setCanvasBackgroundColor = function(color){
                    this.ctx.fillStyle = color;
                    this.ctx.fill();
                    this.ctx.fillRect(0, 0, this.canvas_w, this.canvas_h);
                }
        
        this.set_grosor = function(g){
            if(!(g < 0 && this.width <= 5) && this.width <= 35){
                this.width += g;
                this.height += g;
            }
        }
        
        this.set_fill_color = function(color){
            this.ctx.fillStyle = color;
        }
        
        this.set_stroke_color = function(color){
            this.ctx.strokeStyle = color;
        }
        
        $('#mas-grosor').click(function(e){
            this.set_grosor(5);
        }.bind(this));
        
        $('#menos-grosor').click(function(e){
            this.set_grosor(-5);
        }.bind(this));
        
        $('#color-red').click(function(e){
            this.set_fill_color('red');
            this.set_stroke_color('red');
        }.bind(this));
               
        $('#color-blue').click(function(e){
            this.set_fill_color('blue');
            this.set_stroke_color('blue');
        }.bind(this));
               
        $('#color-yellow').click(function(e){
            this.set_fill_color('yellow');
            this.set_stroke_color('yellow');
        }.bind(this));
        
        $('#color-green').click(function(e){
            this.set_fill_color('green');
            this.set_stroke_color('green');
        }.bind(this));
        
        $('#color-black').click(function(e){
            this.set_fill_color('black');
            this.set_stroke_color('black');
        }.bind(this));
        
        $('#clean').click(function(e){
            this.setCanvasBackgroundColor('white');
            this.drawCanvas();
            this.set_fill_color('black');
            this.set_stroke_color('black');
        }.bind(this));
        
    };
}
