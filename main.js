(function () {
  //overlay loader
  function dismissLoader() {
    var overlay = document.querySelector("body>.overlay");
    overlay.classList.add("loaded");
  }
  window.addEventListener("load", function () {
    dismissLoader()



    //lenis animation
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    //lenis animation end



    /*-----------------
      canvas animation
     ------------------ */
     const html = document.documentElement;
    const canvas = document.getElementById('orbe');
    const context = canvas.getContext('2d');
    const frameCount = 150;

    // Set canvas dimensions
    canvas.width = 1000;
    canvas.height = 750;


    function currentFrame(index) {
      return `../assets/orbe-2/orbe-${index.toString().padStart(5, '0')}.webp`;
    }

    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    //create, and load and draw image
    const img = new Image();
    img.src = currentFrame(1)
    img.onload = function () {
      context.drawImage(img, 0, 0);
    };

    function updateImage(index){
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0)
    }
    
    window.addEventListener('scroll', () => {
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = 1.2* scrollTop/maxScrollTop;
      console.log(scrollFraction);
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );

        requestAnimationFrame(() => updateImage(frameIndex+1))

    })
    preloadImages()
  });


})();
