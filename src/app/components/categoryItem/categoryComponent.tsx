type CategoryProps = {
    title: string;
    subtitle: string;
    imageURL: string;
    isLastTwo: boolean;
  };
  
  function CategoryComponent({
    title,
    subtitle,
    imageURL,
    isLastTwo,
  }: CategoryProps) {
    
    const lastTwoDivs = isLastTwo ? "w-[49%]" : "w-[32%]";
  
    return (
      //remove <main> and <video> after
      <main>
        <div
          className={`flex ${lastTwoDivs} justify-center items-center border border-black cursor-pointer`}
        >
          <div className="group flex flex-col relative w-full overflow-hidden">
          <div
              className="bg-cover bg-center w-full h-[18.75rem] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              style={{ backgroundImage: `url(${imageURL})` }}
            ></div>
            <div className="flex flex-col items-center justify-center p-6 gap-4 w-[10rem] max-w-[10rem] border border-black bg-white transition-opacity duration-1000 ease-out opacity-60 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h2 className="font-bold text-2xl text-[#4a4a4a]">{title}</h2>
              <p className="font-light text-base">{subtitle}</p>
              <span>Test Scrape</span>
              <video width="640" height="360" controls>
                <source src="https://www.youtube.com/embed/EV0KeqvIwjU?si=F6GLN-U4fL8wQEnU" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
              <video width="640" height="360" controls>
                <source src="https://www.youtube.com/embed/fneCWdB8d04?si=x2YMRlFQ6M9mZVzS" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
              <video width="640" height="360" controls>
                <source src="https://www.youtube.com/embed/xslPDHq-yog?si=QxxmlXDyG76O8R0V" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
              <video width="640" height="360" controls>
                <source src="https://www.youtube.com/embed/d9zfHdDSR3c?si=GMCXKEQ5VcrQ-dOx" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
              <video width="640" height="360" controls>
                <source src="https://www.youtube.com/embed/jM7ap2md3HQ?si=GFnAGsdnpTWaS8p4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </div>
        </div>
      </main>
    );
  }
  
  export default CategoryComponent;
  