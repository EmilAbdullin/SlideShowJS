(function(){

    class SlideShow{

        constructor(startIndex,element){
           
            this.startIndex = startIndex;
            this.currentIndex = this.startIndex
            this.element = element;
            this.slides = this.element.querySelectorAll('.slide');
            this.setActiveSlide();
            this.next();
            this.prev();
        }



        setActiveSlide(){
            this.slides.forEach( (item, index) =>{
                if(index === this.currentIndex){
                    item.style.display = "block";
                }else{
                    item.style.display = "none";
                }
            
            })
        }

        next(){
            let nextBtn = this.element.querySelector('[data-direction="next"]');
            nextBtn.addEventListener('click',()=>{
                if(this.currentIndex === this.slides.length - 1){
                    this.currentIndex =0;
                }else{
                    this.currentIndex++;
                }
            })
        }


        prev(){

        }

    }


    let slideShow = document.querySelectorAll('.slider-container');

    slideShow.forEach(item =>{

        new SlideShow(0,item);

    })


}())