function Hero(){
    return(
        <main className="Hero">
            <div className="hero-Content" >
<h1 className="animated-text">
  {
    "BEST_SHOES".split("").map((char, index) => (
      <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
        {char}
      </span>
    ))
  }
</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla dolorum dolorem, consectetur quasi quas ratione.</p>
                <div className="hero-button">
                <div className="hero-btn">
                <button className="btn1">Shop Now</button>
                <button>Category</button>
                </div>
            </div>

            <div className="shopping">
                <p>Also Available On</p>
                <div className="brand-icons">
                <img className="img1" src="/images/amazon.png" alt=" amazon logo"></img>
                <img src="/images/flipkart.png" alt="flipkart logo"></img> 
                </div>
            </div>
            

            </div>
            <div className="hero-image">
                
                <img src="/images/shoe_image.png" alt="logo"></img>

            </div>

        </main>
    )
}
export default Hero