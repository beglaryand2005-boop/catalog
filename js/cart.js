document.querySelectorAll(".qty-btn").forEach(btn => {
    btn.onclick = function () {
        const qtyValueEAlement = this.parentElement.querySelector(".value");
        const step = +this.dataset.step;
        let value = +qtyValueEAlement.innerHTML;
        value += step;
        if(value == -1 || value == 16) return;
        qtyValueEAlement.innerHTML = value;
    }
});

document.querySelectorAll(".remove-product").forEach(trash => {
    trash.onclick = function(){
        const productID = this.dataset.id;
        document.querySelector(`#${productID}`).remove();
    }
})