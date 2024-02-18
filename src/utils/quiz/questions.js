import { Question } from "./quizEngine.js";

const hamburgers = ['https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/165384.jpg', 'https://burgerlad.com/wp-content/uploads/2020/09/McDonalds-Triple-Cheeseburger-3.jpeg', 'https://cdn.entertainmentdaily.com/2020/04/02120049/80_Big-Mac-scaled.jpg', 'https://www.hungryjacks.com.au/Upload/HJ/Media/Menu/product/Main/1000_Whopper.png']
const q = new Question('hamburger cheeseburger bigmac whopper', hamburgers);
const q1 = new Question('OWO hamburger cheeseburger bigmac whopper', hamburgers);
export const qArr = [q, q, q, q, q, q];