import React, { useContext } from 'react';
import ProductCard from './ProductCard'; 
import { CartContext } from './CartContext'; 

const ShowNow = () => {
  const [products] = React.useState([
    // Laptops
    { 
      id: 1, 
      name: 'Dell XPS 13', 
      image: 'https://m.media-amazon.com/images/I/51zY-mOR7kL._AC_UY327_FMwebp_QL65_.jpg', 
      description: 'The Dell XPS 13 is a highly acclaimed ultraportable laptop known for its sleek design, vibrant display, and powerful performance. It features a 13.4-inch InfinityEdge display with up to 4K resolution, Intel Core i7 processors, and a robust build quality. Ideal for professionals and students alike.', 
      rating: 4.6, 
      cost: 55000,
      category: 'Laptop'
    },
    { 
      id: 2, 
      name: 'Apple MacBook Air M2', 
      image: 'https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_UY327_FMwebp_QL65_.jpg', 
      description: 'The Apple MacBook Air M2 combines stunning looks with powerful performance. Equipped with Apple’s M2 chip, it delivers impressive speed and efficiency. Its 13.6-inch Retina display provides exceptional clarity and color accuracy, and the slim, lightweight design makes it perfect for on-the-go productivity.', 
      rating: 4.4, 
      cost: 89000,
      category: 'Laptop'
    },
    { 
      id: 3, 
      name: 'Asus ROG Zephyrus G14', 
      image: 'https://m.media-amazon.com/images/I/81x+1vl1kCL._AC_UY327_FMwebp_QL65_.jpg', 
      description: 'The Asus ROG Zephyrus G14 is a high-performance gaming laptop packed into a compact chassis. Featuring AMD Ryzen 9 processors and NVIDIA GeForce RTX 3060 graphics, it delivers exceptional gaming experiences. The 14-inch display boasts a 120Hz refresh rate, ensuring smooth and immersive visuals.', 
      rating: 4.8, 
      cost: 75000,
      category: 'Laptop'
    },
    { 
      id: 4, 
      name: 'HP Spectre x360', 
      image: 'https://m.media-amazon.com/images/I/71Sq9WQoZ4L._AC_UY327_FMwebp_QL65_.jpg', 
      description: 'The HP Spectre x360 offers premium performance with its 2-in-1 versatility. It features an Intel Core i7 processor, a 13.3-inch 4K OLED display, and a sleek, convertible design. Ideal for professionals who need both laptop and tablet functionalities.', 
      rating: 4.7, 
      cost: 67000,
      category: 'Laptop'
    },
    { 
      id: 5, 
      name: 'Lenovo Yoga 7i', 
      image: 'https://m.media-amazon.com/images/I/81XI2oO6y1L._AC_UY327_FMwebp_QL65_.jpg', 
      description: 'The Lenovo Yoga 7i combines performance and flexibility with its 2-in-1 design. It features a 14-inch FHD touchscreen display, Intel Core i5 processors, and a robust build. Perfect for those who need a laptop that can also function as a tablet.', 
      rating: 4.5, 
      cost: 45000,
      category: 'Laptop'
    },
    { 
      id: 6, 
      name: 'Acer Predator Helios 300', 
      image: 'https://m.media-amazon.com/images/I/61cEq+fQcxL._AC_UY327_FMwebp_QL65_.jpg', 
      description: 'The Acer Predator Helios 300 is a high-performance gaming laptop with a 15.6-inch 144Hz display. It comes with Intel Core i7 processors and NVIDIA GeForce RTX 3060 graphics, offering an immersive gaming experience.', 
      rating: 4.9, 
      cost: 85000,
      category: 'Laptop'
    },
    { 
      id: 7, 
      name: 'Razer Blade 15', 
      image: 'https://m.media-amazon.com/images/I/71Bi75aircL._AC_UY327_FMwebp_QL65_.jpg', 
      description: 'The Razer Blade 15 is known for its sleek design and powerful specs. It features a 15.6-inch Full HD display with a 165Hz refresh rate, Intel Core i7 processors, and NVIDIA GeForce RTX 3070 graphics. Ideal for gamers and professionals alike.', 
      rating: 4.6, 
      cost: 95000,
      category: 'Laptop'
    },
    { 
      id: 8, 
      name: 'MSI GS66 Stealth', 
      image: 'https://m.media-amazon.com/images/I/71cAf4iZ3lL._AC_UY327_FMwebp_QL65_.jpg', 
      description: 'The MSI GS66 Stealth offers top-notch gaming performance with its 15.6-inch 240Hz display. It comes equipped with Intel Core i9 processors and NVIDIA GeForce RTX 3080 graphics. Its sleek design and high performance make it a top choice for gamers.', 
      rating: 4.7, 
      cost: 120000,
      category: 'Laptop'
    },
    // Cameras
    { 
      id: 9, 
      name: 'Canon EOS 90D', 
      image: 'https://m.media-amazon.com/images/I/61Qwa-2f60L._AC_UY327_FMwebp_QL65_.jpg', 
      description: 'The Canon EOS 90D is a versatile DSLR camera offering 32.5 MP resolution, 4K video recording, and fast autofocus. Ideal for both photography enthusiasts and professionals.', 
      rating: 4.7, 
      cost: 85000,
      category: 'Camera'
    },
    { 
      id: 10, 
      name: 'Nikon D7500', 
      image: 'https://m.media-amazon.com/images/I/81bVHWevmyL._AC_UY327_FMwebp_QL65_.jpg', 
      description: 'The Nikon D7500 features a 20.9 MP sensor, 4K UHD video, and excellent low-light performance. It’s a great choice for amateur and professional photographers alike.', 
      rating: 4.6, 
      cost: 75000,
      category: 'Camera'
    },
    { 
      id: 11, 
      name: 'Sony Alpha a7 III', 
      image: 'https://m.media-amazon.com/images/I/71mJlzZpZDL._AC_UY327_FMwebp_QL65_.jpg', 
      description: 'The Sony Alpha a7 III offers a full-frame sensor, 24.2 MP resolution, and impressive 4K video capabilities. It’s well-suited for high-end photography and videography.', 
      rating: 4.8, 
      cost: 170000,
      category: 'Camera'
    },
    { 
      id: 12, 
      name: 'Fujifilm X-T4', 
      image: 'https://m.media-amazon.com/images/I/61HE5gO-yuL._AC_UY327_FMwebp_QL65_.jpg', 
      description: 'The Fujifilm X-T4 features a 26.1 MP sensor, in-body image stabilization, and 4K video recording. It combines classic design with modern performance.', 
      rating: 4.7, 
      cost: 140000,
      category: 'Camera'
    },
    { 
      id: 13, 
      name: 'Olympus OM-D E-M1 Mark III', 
      image: 'https://m.media-amazon.com/images/I/712ZxzdPiaL._AC_UY327_FMwebp_QL65_.jpg', 
      description: 'The Olympus OM-D E-M1 Mark III offers a 20.4 MP sensor, excellent image stabilization, and advanced features for serious photographers.', 
      rating: 4.6, 
      cost: 100000,
      category: 'Camera'
    },
    { 
      id: 14, 
      name: 'Panasonic Lumix GH5', 
      image: 'https://m.media-amazon.com/images/I/4136wMPzWTS._AC_UY327_FMwebp_QL65_.jpg', 
      description: 'The Panasonic Lumix GH5 is renowned for its 4K video capabilities and durable build. It’s a favorite among videographers and hybrid shooters.', 
      rating: 4.7, 
      cost: 110000,
      category: 'Camera'
    },
    { 
      id: 15, 
      name: 'Leica Q2', 
      image: 'https://m.media-amazon.com/images/I/71Mp1rLGGnL._AC_UY327_FMwebp_QL65_.jpg', 
      description: 'The Leica Q2 offers a 47.3 MP full-frame sensor, superb image quality, and a sleek design. It’s a premium compact camera for enthusiasts.', 
      rating: 4.9, 
      cost: 200000,
      category: 'Camera'
    },
    // Home Appliances
    { 
      id: 16, 
      name: 'LG Front Load Washing Machine', 
      image: 'https://m.media-amazon.com/images/I/71msFUl565L._AC_UY327_FMwebp_QL65_.jpg', 
      description: 'The LG Front Load Washing Machine features a 6.5 kg capacity, multiple wash programs, and energy-efficient performance. Ideal for modern households.', 
      rating: 4.5, 
      cost: 30000,
      category: 'Home Appliance'
    },
    { 
      id: 17, 
      name: 'Samsung 253L Double Door Refrigerator', 
      image: 'https://m.media-amazon.com/images/I/71cO8RwidAL._AC_UY327_FMwebp_QL65_.jpg', 
      description: 'The Samsung 253L Double Door Refrigerator offers ample storage, a frost-free cooling system, and energy efficiency. Perfect for family use.', 
      rating: 4.6, 
      cost: 35000,
      category: 'Home Appliance'
    },
    { 
      id: 18, 
      name: 'Sony 1.5 Ton Inverter Split AC', 
      image: 'https://m.media-amazon.com/images/I/41zljqtpKgL._AC_UY327_FMwebp_QL65_.jpg', 
      description: 'The Sony 1.5 Ton Inverter Split AC provides efficient cooling, quiet operation, and smart features for a comfortable indoor environment.', 
      rating: 4.7, 
      cost: 45000,
      category: 'Home Appliance'
    },
    { 
      id: 19, 
      name: 'Philips Air Fryer HD9252/90', 
      image: 'https://m.media-amazon.com/images/I/71ZJSl4lN2L._AC_UL480_FMwebp_QL65_.jpg', 
      description: 'The Philips Air Fryer HD9252/90 allows you to fry, bake, and grill with less oil. It’s a versatile appliance for healthy cooking.', 
      rating: 4.6, 
      cost: 12000,
      category: 'Home Appliance'
    },
    { 
      id: 20, 
      name: 'Bosch 4-Burner Gas Cooktop', 
      image: 'https://m.media-amazon.com/images/I/51Yosy3tGRL._AC_UL480_FMwebp_QL65_.jpg', 
      description: 'The Bosch 4-Burner Gas Cooktop features high-quality burners, easy-to-clean surfaces, and robust performance for all your cooking needs.', 
      rating: 4.6, 
      cost: 15000,
      category: 'Home Appliance'
    },
    { 
      id: 21, 
      name: 'Kent Grand Plus Water Purifier', 
      image: 'https://m.media-amazon.com/images/I/71lBpck2TRL._AC_UY327_FMwebp_QL65_.jpg', 
      description: 'The Kent Grand Plus Water Purifier offers advanced purification technology with a high purification capacity. Ensures safe and clean drinking water.', 
      rating: 4.7, 
      cost: 16000,
      category: 'Home Appliance'
    }
  ]);

  const { addToCart } = useContext(CartContext); 

  const handleAddToCart = (product) => {
    addToCart(product);
    alert("The product has been added to the cart successfully.");
  };

  const filterProductsByCategory = (category) => {
    return products.filter(product => product.category === category);
  };

  return (
    <div className="show-now-container">
      <h1>Shop Now</h1>
      
      <section className="category-section">
        <h2>Laptops</h2>
        <div className="products-grid">
          {filterProductsByCategory('Laptop').map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>
      </section>

      <section className="category-section">
        <h2>Cameras</h2>
        <div className="products-grid">
          {filterProductsByCategory('Camera').map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>
      </section>

      <section className="category-section">
        <h2>Home Appliances</h2>
        <div className="products-grid">
          {filterProductsByCategory('Home Appliance').map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShowNow;
