export const getPickedImages = (): Array<string> => {
  const storedImages = localStorage.getItem('pickedImages');
  return storedImages ? JSON.parse(storedImages) : [];
};

const savePickedImages = (images: Array<string>) => {
  localStorage.setItem('pickedImages', JSON.stringify(images));
};

const backgroundHandler = () => {
  const imageArray = Array.from({ length: 42 }, (_, i) => `https://zenithtodobucket.s3.us-east-1.amazonaws.com/p${i + 1}.jpg`);
  const pickedImages = getPickedImages();

  let new_Image;
  do {
    new_Image = imageArray[Math.floor(Math.random() * 42)];
  } while (pickedImages.includes(new_Image));

  pickedImages.push(new_Image);
  savePickedImages(pickedImages);

  return new_Image;
};

export default backgroundHandler;