import CategoryComponent from "./components/categoryItem/categoryComponent";

function HomePage() {
  const categories = [
    {
      id: 1,
      title: "Hats",
      subtitle: "Shop Now",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "Jackets",
      subtitle: "Shop Now",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "Sneakers",
      subtitle: "Shop Now",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "Womens",
      subtitle: "Shop Now",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "Mens",
      subtitle: "Shop Now",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return (
    <main>
      <div className="flex w-full flex-row flex-wrap p-8 justify-between gap-y-6">
        {categories.map((category, index) => (
          <CategoryComponent
            key={category.id}
            imageURL={category.imageUrl}
            subtitle={category.subtitle}
            title={category.title}
            isLastTwo={index >= categories.length - 2}
          />
        ))}

        <h1>Titulo1</h1>
        <video width="640" height="360" controls>
          <source
            src="https://www.youtube.com/embed/EV0KeqvIwjU?si=F6GLN-U4fL8wQEnU"
            type="video/mp4"
          />
          Seu navegador não suporta o elemento de vídeo.
        </video>
        <h2>Titulo2</h2>
        <h3>Titulo3</h3>
        <video width="640" height="360" controls>
          <source
            src="https://www.youtube.com/embed/fneCWdB8d04?si=x2YMRlFQ6M9mZVzS"
            type="video/mp4"
          />
          Seu navegador não suporta o elemento de vídeo.
        </video>
        <h4>Titulo4</h4>
        <video width="640" height="360" controls>
          <source
            src="https://www.youtube.com/embed/xslPDHq-yog?si=QxxmlXDyG76O8R0V"
            type="video/mp4"
          />
          Seu navegador não suporta o elemento de vídeo.
        </video>
        <video width="640" height="360" controls>
          <source
            src="https://www.youtube.com/embed/d9zfHdDSR3c?si=GMCXKEQ5VcrQ-dOx"
            type="video/mp4"
          />
          Seu navegador não suporta o elemento de vídeo.
        </video>
        <h5>Titulo5</h5>
        <video width="640" height="360" controls>
          <source
            src="https://www.youtube.com/embed/jM7ap2md3HQ?si=GFnAGsdnpTWaS8p4"
            type="video/mp4"
          />
          Seu navegador não suporta o elemento de vídeo.
        </video>
        <h6>Titulo6</h6>
      </div>

      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <img
                    src="https://d32gktdq0wbhql.cloudfront.net/img/blocks-sample/2.jpg"
                    alt="Titolo Descrizione corta 120"
                  />
                  <div></div>
                </div>
              </div>
              <a href="https://www.twitch.tv/">
                <div>
                  <p>Produto 1</p>
                  <p>Descrição Produto 1</p>
                  <p>110&nbsp;€</p>
                </div>
              </a>
            </div>
            <div>
              <div>
                <div>
                  <img
                    src="https://d32gktdq0wbhql.cloudfront.net/img/blocks-sample/2.jpg"
                    alt="Titolo Descrizione corta 120"
                  />
                  <div></div>
                </div>
              </div>
              <a href="">
                <div>
                  <p>Produto 2</p>
                  <p>Descrição Produto 2</p>
                  <p>120&nbsp;€</p>
                </div>
              </a>
            </div>
            <div>
              <div>
                <div>
                  <img
                    src="https://d32gktdq0wbhql.cloudfront.net/img/blocks-sample/2.jpg"
                    alt="Titolo Descrizione corta 120"
                  />
                  <div></div>
                </div>
              </div>
              <a href="https://twitter.com/home">
                <div>
                  <p>Produto 3</p>
                  <p>Descrição Produto 3</p>
                  <p>130&nbsp;€</p>
                </div>
              </a>
            </div>
            <div>
              <div>
                <div>
                  <img
                    src="https://d32gktdq0wbhql.cloudfront.net/img/blocks-sample/2.jpg"
                    alt="Titolo Descrizione corta 120"
                  />
                  <div></div>
                </div>
              </div>
              <a href="">
                <div>
                  <p>Produto 4</p>
                  <p>Descrição Produto 4</p>
                  <p>140&nbsp;€</p>
                </div>
              </a>
            </div>
            <div>
              <div>
                <div>
                  <img
                    src="https://d32gktdq0wbhql.cloudfront.net/img/blocks-sample/2.jpg"
                    alt="Titolo Descrizione corta 120"
                  />
                  <div></div>
                </div>
              </div>
              <a href="https://www.youtube.com/">
                <div>
                  <p>Produto 5</p>
                  <p>Descrição Produto 5</p>
                  <p>150&nbsp;€</p>
                </div>
              </a>
            </div>
            <div>
              <div>
                <div>
                  <img
                    src="https://d32gktdq0wbhql.cloudfront.net/img/blocks-sample/2.jpg"
                    alt="Titolo Descrizione corta 120"
                  />
                  <div></div>
                </div>
              </div>
              <a href="">
                <div>
                  <p>Produto 6</p>
                  <p>Descrição Produto 6</p>
                  <p>160&nbsp;€</p>
                </div>
              </a>
            </div>
            <div>
              <div>
                <div>
                  <img
                    src="https://d32gktdq0wbhql.cloudfront.net/img/blocks-sample/2.jpg"
                    alt="Titolo Descrizione corta 120"
                  />
                  <div></div>
                </div>
              </div>
              <a href="https://aquazzura.skin-headless.com/">
                <div>
                  <p>Produto 7</p>
                  <p>Descrição Produto 7</p>
                  <p>170&nbsp;€</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
