import imgHero from "../assets/images/image-omelette.jpeg"


export const ImgHero = () => {
  return (
    <section className="sm:px-5 sm:pt-6 md:px-8 md:pt-9 w-full">
        <img 
        src={imgHero} 
        loading="lazy"
        alt="Delicious omelette served on a white plate" 
        className="sm:rounded-2xl w-full lg:h-[460px] object-cover"/>
    </section>
  )
}

