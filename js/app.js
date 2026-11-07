// console.log(productsArr);
// console.log([document.querySelector(".products-row")]);

// let start = 0;
// let count = 20;
// let activation = true;

// function showProducts() {
//   let productsHTML = "";

//   for (let i = start; i < count + start; i++) {

//     if (!productsArr[i]) {
//       activation = false;
//       document
//         .querySelector(".see-more-products")
//         .setAttribute("disabled", true);
//       break;
//     }
//     productsHTML =productsHTML +`
//      <div class="col w-33">
//                     <div class="wrapper carding">
//                         <div class="image">
//                             <picture>
//                                 <img src=${productsArr[i].images[0]} 
//                                 alt=""referrerpolicy="no-referrer">
//                             </picture>
//                         </div>
//                         <div class="info">
//                             <h3>${productsArr[i].title} </h3>
//                             <div class="categories">
//                                 ${productsArr[i].category?.name}
//                             </div>
//                             <div class="flex gap-10">
//                                 <strong>${productsArr[i].price}$</strong>
//                                 <del>${productsArr[i].price + productsArr[i].price * 1.5}$</del>
//                             </div>
//                             <a href="Cart_page.html" class="btn text-center">
//                                 Buy now
//                             </a>
//                      </div>
//                 </div>
//           </div> `
//   }
  
//   start += count;

//   document.querySelector(".products-row").innerHTML += productsHTML;
// }

// showProducts();

// document.querySelector(".see-more-products").onclick = function () {
//   if (!activation) return;
//   showProducts();
// };


let theme = localStorage.getItem('theme') ?? '';
document.querySelector('body').className = theme;


// localStorage.setItem('test',125)
// alert(localStorage.getItem('test'))

document.querySelector('.change-theme').addEventListener('click', function () {
    theme = (theme === 'dark') ? 'light' : 'dark';
    localStorage.setItem('theme', theme)
    document.querySelector('body').className = theme;
})