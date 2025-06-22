import "./gallery.css";

export function GalleryHeader() {
  return <h2>My recent projects</h2>
}

export default function Gallery({link, name, img, alt, description}) {
  return (
    
    <div className="gallery-item">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        ><img
          src={img}
          className="gallery-img"
          alt={alt}
      /></a>
    
      <section className="gallery-text">
        <h3>{name}</h3>
        <p>
          {description}
        </p>
      </section>
    </div>
  
  );
}