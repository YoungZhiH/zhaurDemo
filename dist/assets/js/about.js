webpackJsonp([6],{14:function(module,exports){eval("console.log(\"about.js页面\");\n// function canvasSmoke(canvas, options) {\n//     var defaults = {\n//       count: 30,\n//       velocity: 2,\n//       fps: 30,\n//       url: './image/smoke.png'\n//     }\n//     options = options || {};\n\n//     //参数合拼\n//     var params = {};\n//     for (var key in defaults) {\n//       params[key] = options[key] || defaults[key];\n//     }\n//     // 创建存储粒子的数组\n//     var particles = [];\n\n//     // 渲染的粒子数目\n//     var particleCount = params.count;\n\n//     // 每个方向的最大速度\n//     var maxVelocity = params.velocity;\n\n//     // 每秒多少帧\n//     var targetFPS = params.fps;\n\n//     // canvas元素\n//     var eleCanvas = canvas;\n\n//     if (!eleCanvas) {\n//       return this;\n//     }\n\n//     var canvasWidth = eleCanvas.clientWidth;\n//     var canvasHeight = eleCanvas.clientHeight;\n\n//     eleCanvas.width = canvasWidth;\n//     eleCanvas.height = canvasHeight;\n\n//     // 创建图片对象\n//     var imageObj = new Image();\n//     imageObj.onload = function() {\n//       particles.forEach(function(particle) {\n//         particle.setImage(imageObj);\n//       });\n//     };\n\n//     // 烟雾图片地址\n//     imageObj.src = params.url;\n\n//     // 粒子实例方法\n//     function Particle(context) {\n\n//       // 初始化位置\n//       this.x = 0;\n//       this.y = 0;\n\n//       // 纵横速度\n//       this.xVelocity = 0;\n//       this.yVelocity = 0;\n\n//       // 圆角大小\n//       this.radius = 2;\n\n//       // 存储上下文，绘制的时候需要\n//       this.context = context;\n\n//       // 绘制粒子的具体方法\n//       this.draw = function() {\n//         // 如果图片，则绘制\n//         if (this.image) {\n//           this.context.globalAlpha = this.alpha;\n//           // 烟雾缭绕就看这里了\n//           // 这是宽度，是动态的\n//           var fillWidth = canvasWidth / 2,\n//             fillHeight = fillWidth - fillWidth * (this.x / canvasWidth * this.y / canvasHeight);\n\n//           this.context.drawImage(this.image, 0, 0, this.imageWidth, this.imageHeight, this.x, this.y, fillWidth, fillHeight);\n\n//         }\n//       };\n\n//       // 刷新粒子\n//       this.update = function() {\n//         // 改变粒子\n//         this.x += this.xVelocity;\n//         this.y += this.yVelocity;\n\n//         // 右边缘\n//         if (this.x >= canvasWidth) {\n//           this.xVelocity = -this.xVelocity;\n//           this.x = canvasWidth;\n//           // 左边缘\n//         } else if (this.x <= 0) {\n//           this.xVelocity = -this.xVelocity;\n//           this.x = 0;\n//         }\n//         // 底边缘\n//         if (this.y >= canvasHeight) {\n//           this.yVelocity = -this.yVelocity;\n//           this.y = canvasHeight;\n//           // 是否上边缘\n//         } else if (this.y <= 0) {\n//           this.yVelocity = -this.yVelocity;\n//           this.y = 0;\n//         }\n\n//         // 越靠近透明度越低\n//         this.alpha = (1 - Math.abs(canvasWidth * 0.5 - this.x) / canvasWidth) * (0.7 - Math.abs(canvasHeight * 0.5 - this.y) / canvasHeight);\n//       };\n\n//       // 设置粒子位置方法\n//       this.setPosition = function(x, y) {\n//         this.x = x;\n//         this.y = y;\n//       };\n\n//       // 设置速度方法\n//       this.setVelocity = function(x, y) {\n//         this.xVelocity = x;\n//         this.yVelocity = y;\n//       };\n\n//       this.setImage = function(image) {\n//         this.imageWidth = image.width;\n//         this.imageHeight = image.height;\n//         this.image = image;\n//       };\n//     }\n//     // 生成一个min,max大小之间的随机数\n//     function generateRandom(min, max) {\n//       return Math.random() * (max - min) + min;\n//     }\n\n//     // canvas上下文\n//     var context;\n\n//     // 初始化常见\n//     function init() {\n//       var canvas = eleCanvas;\n//       if (canvas.getContext) {\n//         // 绘图都需要这条语句\n//         context = canvas.getContext('2d');\n\n//         // 创建粒子，并设置他们的位置什么的，当然都是随机的\n//         for (var i = 0; i < particleCount; ++i) {\n//           var particle = new Particle(context);\n\n//           // 随机位置\n//           particle.setPosition(generateRandom(0, canvasWidth), generateRandom(0, canvasHeight));\n\n//           // 设置随机速度\n//           particle.setVelocity(generateRandom(-maxVelocity, maxVelocity), generateRandom(-maxVelocity, maxVelocity));\n//           particles.push(particle);\n//         }\n//       }\n//     }\n\n//     init();\n\n//     function draw() {\n//       // 清除绘制\n//       context.clearRect(0, 0, canvasWidth, canvasHeight);\n\n//       // 绘制所有粒子\n//       particles.forEach(function(particle) {\n//         particle.draw();\n//       });\n//     }\n\n//     function update() {\n//       particles.forEach(function(particle) {\n//         particle.update();\n//       });\n//     }\n//     if (context) {\n//       setInterval(function() {\n//         // 绘制前先更新位置什么的\n//         update();\n\n//         // 绘制\n//         draw();\n//       }, 1000 / targetFPS);\n//     }\n\n//   }\n\n//   // IE9+烟雾效果走起\n//   if ([].map) {\n//     canvasSmoke(document.querySelector('#smokeCanvas'));\n//   }\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2Fib3V0LmpzP2Y3M2UiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQVFDLEdBQVIsQ0FBWSxZQUFaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiYWJvdXQuanPpobXpnaJcIik7XG4vLyBmdW5jdGlvbiBjYW52YXNTbW9rZShjYW52YXMsIG9wdGlvbnMpIHtcbi8vICAgICB2YXIgZGVmYXVsdHMgPSB7XG4vLyAgICAgICBjb3VudDogMzAsXG4vLyAgICAgICB2ZWxvY2l0eTogMixcbi8vICAgICAgIGZwczogMzAsXG4vLyAgICAgICB1cmw6ICcuL2ltYWdlL3Ntb2tlLnBuZydcbi8vICAgICB9XG4vLyAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbi8vICAgICAvL+WPguaVsOWQiOaLvFxuLy8gICAgIHZhciBwYXJhbXMgPSB7fTtcbi8vICAgICBmb3IgKHZhciBrZXkgaW4gZGVmYXVsdHMpIHtcbi8vICAgICAgIHBhcmFtc1trZXldID0gb3B0aW9uc1trZXldIHx8IGRlZmF1bHRzW2tleV07XG4vLyAgICAgfVxuLy8gICAgIC8vIOWIm+W7uuWtmOWCqOeykuWtkOeahOaVsOe7hFxuLy8gICAgIHZhciBwYXJ0aWNsZXMgPSBbXTtcblxuLy8gICAgIC8vIOa4suafk+eahOeykuWtkOaVsOebrlxuLy8gICAgIHZhciBwYXJ0aWNsZUNvdW50ID0gcGFyYW1zLmNvdW50O1xuXG4vLyAgICAgLy8g5q+P5Liq5pa55ZCR55qE5pyA5aSn6YCf5bqmXG4vLyAgICAgdmFyIG1heFZlbG9jaXR5ID0gcGFyYW1zLnZlbG9jaXR5O1xuXG4vLyAgICAgLy8g5q+P56eS5aSa5bCR5binXG4vLyAgICAgdmFyIHRhcmdldEZQUyA9IHBhcmFtcy5mcHM7XG5cbi8vICAgICAvLyBjYW52YXPlhYPntKBcbi8vICAgICB2YXIgZWxlQ2FudmFzID0gY2FudmFzO1xuXG4vLyAgICAgaWYgKCFlbGVDYW52YXMpIHtcbi8vICAgICAgIHJldHVybiB0aGlzO1xuLy8gICAgIH1cblxuLy8gICAgIHZhciBjYW52YXNXaWR0aCA9IGVsZUNhbnZhcy5jbGllbnRXaWR0aDtcbi8vICAgICB2YXIgY2FudmFzSGVpZ2h0ID0gZWxlQ2FudmFzLmNsaWVudEhlaWdodDtcblxuLy8gICAgIGVsZUNhbnZhcy53aWR0aCA9IGNhbnZhc1dpZHRoO1xuLy8gICAgIGVsZUNhbnZhcy5oZWlnaHQgPSBjYW52YXNIZWlnaHQ7XG5cbi8vICAgICAvLyDliJvlu7rlm77niYflr7nosaFcbi8vICAgICB2YXIgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcbi8vICAgICBpbWFnZU9iai5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbi8vICAgICAgIHBhcnRpY2xlcy5mb3JFYWNoKGZ1bmN0aW9uKHBhcnRpY2xlKSB7XG4vLyAgICAgICAgIHBhcnRpY2xlLnNldEltYWdlKGltYWdlT2JqKTtcbi8vICAgICAgIH0pO1xuLy8gICAgIH07XG5cbi8vICAgICAvLyDng5/pm77lm77niYflnLDlnYBcbi8vICAgICBpbWFnZU9iai5zcmMgPSBwYXJhbXMudXJsO1xuXG4vLyAgICAgLy8g57KS5a2Q5a6e5L6L5pa55rOVXG4vLyAgICAgZnVuY3Rpb24gUGFydGljbGUoY29udGV4dCkge1xuXG4vLyAgICAgICAvLyDliJ3lp4vljJbkvY3nva5cbi8vICAgICAgIHRoaXMueCA9IDA7XG4vLyAgICAgICB0aGlzLnkgPSAwO1xuXG4vLyAgICAgICAvLyDnurXmqKrpgJ/luqZcbi8vICAgICAgIHRoaXMueFZlbG9jaXR5ID0gMDtcbi8vICAgICAgIHRoaXMueVZlbG9jaXR5ID0gMDtcblxuLy8gICAgICAgLy8g5ZyG6KeS5aSn5bCPXG4vLyAgICAgICB0aGlzLnJhZGl1cyA9IDI7XG5cbi8vICAgICAgIC8vIOWtmOWCqOS4iuS4i+aWh++8jOe7mOWItueahOaXtuWAmemcgOimgVxuLy8gICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuLy8gICAgICAgLy8g57uY5Yi257KS5a2Q55qE5YW35L2T5pa55rOVXG4vLyAgICAgICB0aGlzLmRyYXcgPSBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgLy8g5aaC5p6c5Zu+54mH77yM5YiZ57uY5Yi2XG4vLyAgICAgICAgIGlmICh0aGlzLmltYWdlKSB7XG4vLyAgICAgICAgICAgdGhpcy5jb250ZXh0Lmdsb2JhbEFscGhhID0gdGhpcy5hbHBoYTtcbi8vICAgICAgICAgICAvLyDng5/pm77nvK3nu5XlsLHnnIvov5nph4zkuoZcbi8vICAgICAgICAgICAvLyDov5nmmK/lrr3luqbvvIzmmK/liqjmgIHnmoRcbi8vICAgICAgICAgICB2YXIgZmlsbFdpZHRoID0gY2FudmFzV2lkdGggLyAyLFxuLy8gICAgICAgICAgICAgZmlsbEhlaWdodCA9IGZpbGxXaWR0aCAtIGZpbGxXaWR0aCAqICh0aGlzLnggLyBjYW52YXNXaWR0aCAqIHRoaXMueSAvIGNhbnZhc0hlaWdodCk7XG5cbi8vICAgICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIDAsIDAsIHRoaXMuaW1hZ2VXaWR0aCwgdGhpcy5pbWFnZUhlaWdodCwgdGhpcy54LCB0aGlzLnksIGZpbGxXaWR0aCwgZmlsbEhlaWdodCk7XG5cbi8vICAgICAgICAgfVxuLy8gICAgICAgfTtcblxuLy8gICAgICAgLy8g5Yi35paw57KS5a2QXG4vLyAgICAgICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICAvLyDmlLnlj5jnspLlrZBcbi8vICAgICAgICAgdGhpcy54ICs9IHRoaXMueFZlbG9jaXR5O1xuLy8gICAgICAgICB0aGlzLnkgKz0gdGhpcy55VmVsb2NpdHk7XG5cbi8vICAgICAgICAgLy8g5Y+z6L6557yYXG4vLyAgICAgICAgIGlmICh0aGlzLnggPj0gY2FudmFzV2lkdGgpIHtcbi8vICAgICAgICAgICB0aGlzLnhWZWxvY2l0eSA9IC10aGlzLnhWZWxvY2l0eTtcbi8vICAgICAgICAgICB0aGlzLnggPSBjYW52YXNXaWR0aDtcbi8vICAgICAgICAgICAvLyDlt6bovrnnvJhcbi8vICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnggPD0gMCkge1xuLy8gICAgICAgICAgIHRoaXMueFZlbG9jaXR5ID0gLXRoaXMueFZlbG9jaXR5O1xuLy8gICAgICAgICAgIHRoaXMueCA9IDA7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgLy8g5bqV6L6557yYXG4vLyAgICAgICAgIGlmICh0aGlzLnkgPj0gY2FudmFzSGVpZ2h0KSB7XG4vLyAgICAgICAgICAgdGhpcy55VmVsb2NpdHkgPSAtdGhpcy55VmVsb2NpdHk7XG4vLyAgICAgICAgICAgdGhpcy55ID0gY2FudmFzSGVpZ2h0O1xuLy8gICAgICAgICAgIC8vIOaYr+WQpuS4iui+uee8mFxuLy8gICAgICAgICB9IGVsc2UgaWYgKHRoaXMueSA8PSAwKSB7XG4vLyAgICAgICAgICAgdGhpcy55VmVsb2NpdHkgPSAtdGhpcy55VmVsb2NpdHk7XG4vLyAgICAgICAgICAgdGhpcy55ID0gMDtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIC8vIOi2iumdoOi/kemAj+aYjuW6pui2iuS9jlxuLy8gICAgICAgICB0aGlzLmFscGhhID0gKDEgLSBNYXRoLmFicyhjYW52YXNXaWR0aCAqIDAuNSAtIHRoaXMueCkgLyBjYW52YXNXaWR0aCkgKiAoMC43IC0gTWF0aC5hYnMoY2FudmFzSGVpZ2h0ICogMC41IC0gdGhpcy55KSAvIGNhbnZhc0hlaWdodCk7XG4vLyAgICAgICB9O1xuXG4vLyAgICAgICAvLyDorr7nva7nspLlrZDkvY3nva7mlrnms5Vcbi8vICAgICAgIHRoaXMuc2V0UG9zaXRpb24gPSBmdW5jdGlvbih4LCB5KSB7XG4vLyAgICAgICAgIHRoaXMueCA9IHg7XG4vLyAgICAgICAgIHRoaXMueSA9IHk7XG4vLyAgICAgICB9O1xuXG4vLyAgICAgICAvLyDorr7nva7pgJ/luqbmlrnms5Vcbi8vICAgICAgIHRoaXMuc2V0VmVsb2NpdHkgPSBmdW5jdGlvbih4LCB5KSB7XG4vLyAgICAgICAgIHRoaXMueFZlbG9jaXR5ID0geDtcbi8vICAgICAgICAgdGhpcy55VmVsb2NpdHkgPSB5O1xuLy8gICAgICAgfTtcblxuLy8gICAgICAgdGhpcy5zZXRJbWFnZSA9IGZ1bmN0aW9uKGltYWdlKSB7XG4vLyAgICAgICAgIHRoaXMuaW1hZ2VXaWR0aCA9IGltYWdlLndpZHRoO1xuLy8gICAgICAgICB0aGlzLmltYWdlSGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xuLy8gICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4vLyAgICAgICB9O1xuLy8gICAgIH1cbi8vICAgICAvLyDnlJ/miJDkuIDkuKptaW4sbWF45aSn5bCP5LmL6Ze055qE6ZqP5py65pWwXG4vLyAgICAgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb20obWluLCBtYXgpIHtcbi8vICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG4vLyAgICAgfVxuXG4vLyAgICAgLy8gY2FudmFz5LiK5LiL5paHXG4vLyAgICAgdmFyIGNvbnRleHQ7XG5cbi8vICAgICAvLyDliJ3lp4vljJbluLjop4Fcbi8vICAgICBmdW5jdGlvbiBpbml0KCkge1xuLy8gICAgICAgdmFyIGNhbnZhcyA9IGVsZUNhbnZhcztcbi8vICAgICAgIGlmIChjYW52YXMuZ2V0Q29udGV4dCkge1xuLy8gICAgICAgICAvLyDnu5jlm77pg73pnIDopoHov5nmnaHor63lj6Vcbi8vICAgICAgICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4vLyAgICAgICAgIC8vIOWIm+W7uueykuWtkO+8jOW5tuiuvue9ruS7luS7rOeahOS9jee9ruS7gOS5iOeahO+8jOW9k+eEtumDveaYr+maj+acuueahFxuLy8gICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRpY2xlQ291bnQ7ICsraSkge1xuLy8gICAgICAgICAgIHZhciBwYXJ0aWNsZSA9IG5ldyBQYXJ0aWNsZShjb250ZXh0KTtcblxuLy8gICAgICAgICAgIC8vIOmaj+acuuS9jee9rlxuLy8gICAgICAgICAgIHBhcnRpY2xlLnNldFBvc2l0aW9uKGdlbmVyYXRlUmFuZG9tKDAsIGNhbnZhc1dpZHRoKSwgZ2VuZXJhdGVSYW5kb20oMCwgY2FudmFzSGVpZ2h0KSk7XG5cbi8vICAgICAgICAgICAvLyDorr7nva7pmo/mnLrpgJ/luqZcbi8vICAgICAgICAgICBwYXJ0aWNsZS5zZXRWZWxvY2l0eShnZW5lcmF0ZVJhbmRvbSgtbWF4VmVsb2NpdHksIG1heFZlbG9jaXR5KSwgZ2VuZXJhdGVSYW5kb20oLW1heFZlbG9jaXR5LCBtYXhWZWxvY2l0eSkpO1xuLy8gICAgICAgICAgIHBhcnRpY2xlcy5wdXNoKHBhcnRpY2xlKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIGluaXQoKTtcblxuLy8gICAgIGZ1bmN0aW9uIGRyYXcoKSB7XG4vLyAgICAgICAvLyDmuIXpmaTnu5jliLZcbi8vICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xuXG4vLyAgICAgICAvLyDnu5jliLbmiYDmnInnspLlrZBcbi8vICAgICAgIHBhcnRpY2xlcy5mb3JFYWNoKGZ1bmN0aW9uKHBhcnRpY2xlKSB7XG4vLyAgICAgICAgIHBhcnRpY2xlLmRyYXcoKTtcbi8vICAgICAgIH0pO1xuLy8gICAgIH1cblxuLy8gICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbi8vICAgICAgIHBhcnRpY2xlcy5mb3JFYWNoKGZ1bmN0aW9uKHBhcnRpY2xlKSB7XG4vLyAgICAgICAgIHBhcnRpY2xlLnVwZGF0ZSgpO1xuLy8gICAgICAgfSk7XG4vLyAgICAgfVxuLy8gICAgIGlmIChjb250ZXh0KSB7XG4vLyAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbi8vICAgICAgICAgLy8g57uY5Yi25YmN5YWI5pu05paw5L2N572u5LuA5LmI55qEXG4vLyAgICAgICAgIHVwZGF0ZSgpO1xuXG4vLyAgICAgICAgIC8vIOe7mOWItlxuLy8gICAgICAgICBkcmF3KCk7XG4vLyAgICAgICB9LCAxMDAwIC8gdGFyZ2V0RlBTKTtcbi8vICAgICB9XG5cbi8vICAgfVxuXG4vLyAgIC8vIElFOSvng5/pm77mlYjmnpzotbDotbdcbi8vICAgaWYgKFtdLm1hcCkge1xuLy8gICAgIGNhbnZhc1Ntb2tlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbW9rZUNhbnZhcycpKTtcbi8vICAgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvanMvYWJvdXQuanMiXSwic291cmNlUm9vdCI6IiJ9")}},[14]);