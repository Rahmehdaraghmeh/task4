import React from 'react';
import one from '/src/assets/images/one.jpg';

export default function Home() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center min-vh-100 w-100"
      style={{
        backgroundImage: `url(${one})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="text-center text-secondary">
        <h2>About</h2>
        <p className="p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, vel ratione delectus quae et nobis cum
          obcaecati facilis omnis aliquid dolore odio alias, neque saepe necessitatibus nam voluptates minima aliquam
          veritatis consequatur. Neque fugiat repellat quos perspiciatis quis nam autem obcaecati rerum ullam vitae
          reiciendis nulla vero provident est sunt amet numquam magni deleniti, blanditiis, iusto atque aspernatur facere.
        </p>
      </div>
    </div>
  );
}
