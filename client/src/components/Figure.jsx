function Figure({ item: product }) {
  return (
    <figure>
      <figcaption>
        <p>{product.title}</p>
      </figcaption>
      <img src={product.image} alt={product.title} />      
    </figure>
  );
}

export default Figure;
