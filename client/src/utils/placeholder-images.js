export const placeholderImages = {
  banner: [
    "https://picsum.photos/1920/600?random=1",
    "https://picsum.photos/1920/600?random=2",
    "https://picsum.photos/1920/600?random=3",
  ],
  product: "https://picsum.photos/400/400?random=",
};

export const getPlaceholderProductImage = (id) => {
  return `${placeholderImages.product}${id}`;
}; 