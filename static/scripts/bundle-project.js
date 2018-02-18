$(document).ready(function(){$(".fullpage").fullpage({dragAndMove:!0,navigation:!0,slidesNavigation:!0,controlArrows:!1})});
new p5(function(i){i.cacheTriangle,i.imgCopy,i.cache,i.img,i.imgGlitch,i.changeImgG,i.j=-1,i.triangleSize=350,i.triangleHeight=i.triangleSize*i.sqrt(3)/2,i.triangles=[],i.canvas={},i.cnv={},i.doGlitch=!1,i.offset=0,i.doChangeImg=!1,i.offsetChangeImg=0,i.preload=function(){i.img=i.loadImage("static/images/lanterns.jpg")},i.setup=function(){i.initSetup(),setInterval(function(){return i.setDoGlitch()},7e3)},i.initSetup=function(){i.cnv=i.createCanvas(window.innerWidth,window.innerHeight),i.cache=new i.Cache,i.initTriangles(),i.imgCopy=i.createImage(i.triangleSize,i.triangleSize),i.cacheTriangle=i.createGraphics(i.triangleSize,i.triangleSize),i.cacheTriangle.strokeWeight(0),i.cacheTriangle.triangle(0,0,i.triangleSize,0,i.triangleSize/2,i.triangleHeight),i.pixelDensity(1),i.imgGlitch=i.createImage(i.img.width,i.img.height)},i.setDoGlitch=function(){i.doGlitch=!0,i.imgGlitch.copy(i.img,0,0,i.img.width,i.img.height,0,0,i.imgGlitch.width,i.imgGlitch.height)},i.glitch=function(){var e;e=i.imgGlitch,function(){var i,t,n;for(e.loadPixels(),n=0;n<e.height;){for(t=0;t<e.width;)i=4*(t+n*e.width),void 0===e.pixels[i+4]||void 0===e.pixels[i+9]?(e.pixels[i]=0,e.pixels[i+1]=0,e.pixels[i+2]=0,e.pixels[i+3]=0):(e.pixels[i]=e.pixels[i+4],e.pixels[i+1]=e.pixels[i+9]),t++;n++}e.updatePixels()}(),5===i.offset&&(i.doGlitch=!1,i.offset=0)},i.draw=function(){var e,t;for(t=i.img,i.doGlitch&&(i.offset+=1,i.glitch(),t=i.imgGlitch),i.cache.move(),i.cache.cut(t),e=0;e<i.triangles.length;)i.triangles[e].display(),e++;i.changeImg()},i.changeImg=function(){i.doChangeImg&&(i.doGlitch=!1,i.changeImgG.image(i.img_c,-i.img_c.width+i.offsetChangeImg,0),i.img=i.changeImgG,i.offsetChangeImg+=5,i.offsetChangeImg-i.img_c.width>=0&&(i.doChangeImg=!1))},i.kTriangle=function(e,t,n,g,a){this.x=e,this.y=t,this.angle=n,this.scaleX=g,this.scaleY=a,this.display=function(){i.push(),i.translate(this.x,this.y),i.scale(this.scaleX,this.scaleY),i.rotate(this.angle),i.image(i.imgCopy,0,0),i.pop()}},i.Cache=function(){this.x=(i.img.width-i.triangleSize)/2,this.y=(i.img.height-i.triangleHeight)/2,this.speedX=0,this.speedY=0,this.move=function(){var e,t;e=i.mouseX,t=i.mouseY,0===i.mouseX&&(e=this.x,t=this.y),this.speedX=(e-this.x)/20,this.speedY=(t-this.y)/20,this.x+=this.speedX,this.y+=this.speedY},this.cut=function(e){var t,n;t=i.map(this.x,0,i.width,0,i.img.width-i.triangleSize),n=i.map(this.y,0,i.height,0,i.img.height-i.triangleHeight),i.imgCopy.copy(e,t,n,i.triangleSize,i.triangleSize,0,0,i.triangleSize,i.triangleSize),i.imgCopy.mask(i.cacheTriangle)}},i.windowResized=function(){i.resizeCanvas(window.innerWidth,window.innerHeight),i.initSetup()},i.initTriangles=function(){var e,t;for(e=0;e<i.ceil(i.height/i.triangleHeight/2);){for(t=0;t<i.ceil(i.width/i.triangleSize/3);)i.triangles[++i.j]=new i.kTriangle(0+3*i.triangleSize*t,0+2*i.triangleHeight*e,i.PI/3,-1,1),i.triangles[++i.j]=new i.kTriangle(0+3*i.triangleSize*t,0+2*i.triangleHeight*e,0,1,1),i.triangles[++i.j]=new i.kTriangle(3*i.triangleSize/2+3*i.triangleSize*t,i.triangleHeight+2*i.triangleHeight*e,-i.PI/3,-1,1),i.triangles[++i.j]=new i.kTriangle(3*i.triangleSize/2+3*i.triangleSize*t,i.triangleHeight+2*i.triangleHeight*e,i.PI/3,-1,-1),i.triangles[++i.j]=new i.kTriangle(3*i.triangleSize/2+3*i.triangleSize*t,i.triangleHeight+2*i.triangleHeight*e,0,1,-1),i.triangles[++i.j]=new i.kTriangle(3*i.triangleSize+3*i.triangleSize*t,0+2*i.triangleHeight*e,-i.PI/3,-1,-1),i.triangles[++i.j]=new i.kTriangle(3*i.triangleSize+3*i.triangleSize*t,0+2*i.triangleHeight*e,i.PI/3,-1,1),i.triangles[++i.j]=new i.kTriangle(0+3*i.triangleSize*t,2*i.triangleHeight+2*i.triangleHeight*e,i.PI/3,-1,-1),i.triangles[++i.j]=new i.kTriangle(0+3*i.triangleSize*t,2*i.triangleHeight+2*i.triangleHeight*e,0,1,-1),i.triangles[++i.j]=new i.kTriangle(3*i.triangleSize/2+3*i.triangleSize*t,i.triangleHeight+2*i.triangleHeight*e,-i.PI/3,-1,-1),i.triangles[++i.j]=new i.kTriangle(3*i.triangleSize/2+3*i.triangleSize*t,i.triangleHeight+2*i.triangleHeight*e,i.PI/3,-1,1),i.triangles[++i.j]=new i.kTriangle(3*i.triangleSize/2+3*i.triangleSize*t,i.triangleHeight+2*i.triangleHeight*e,0,1,1),i.triangles[++i.j]=new i.kTriangle(3*i.triangleSize+3*i.triangleSize*t,2*i.triangleHeight+2*i.triangleHeight*e,-i.PI/3,-1,1),i.triangles[++i.j]=new i.kTriangle(3*i.triangleSize+3*i.triangleSize*t,2*i.triangleHeight+2*i.triangleHeight*e,i.PI/3,-1,-1),t++;e++}},p5.Renderer2D._copyHelper=function(e,t,n,g,a,l,r,h,s){var c;e instanceof p5.Image?i.canvas=e.canvas:e instanceof p5.Graphics&&(e.loadPixels(),i.canvas=e.elt),c=i.canvas.width/e.width,this.drawingContext.drawImage(i.canvas,c*t,c*n,c*g,c*a,l,r,h,s)}});
$(document).ready(function(){new Typed(".overlay__text",{strings:["Developer ^3000","SysAdmin ^3000","DevOps ^3000","Consultant ^3000",""],typeSpeed:150,backSpeed:50,loop:!0})});