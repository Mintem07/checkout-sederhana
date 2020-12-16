// gonta ganti gambar
const imgItem = document.querySelectorAll('.image-item');
const imgJumbo = document.querySelectorAll('.jumbo');
const thumbs = document.querySelectorAll('.small');

for(let y = 0; y < imgItem.length; y++) {
    imgItem[y].addEventListener('click', function(e) {
        if (e.target.className == 'small') {
            imgJumbo[y].src = e.target.src;
    
            imgJumbo[y].classList.add('fade');
            setTimeout(function() {
                imgJumbo[y].classList.remove('fade');
            }, 500);
        }
    })
}

// tombol checkout
const title = document.querySelectorAll('.title');
for(let x = 0; x < title.length; x++) {
    title[x].addEventListener('click', function(e) {
        if(x == 0){
            if (e.target.className == 'add-to-cart'){
                const parent = document.getElementById('checkout-item')
                const item = document.createElement("div");
                const titleItemCheckout = document.createElement("div");
                const titleItem = document.createElement("h4");
                const harga = document.createElement("h5");
                const close = document.createElement("span");
        
                item.classList.add('item');
                titleItemCheckout.classList.add('title-item-checkout');
                titleItem.innerHTML = "Hiasan rumah";
                harga.classList.add('text-gray');
                harga.innerHTML = "Rp. 100.000 - Rp. 150.000";
                close.classList.add('close');
                close.innerHTML = "x";
        
                titleItemCheckout.appendChild(titleItem);
                titleItemCheckout.appendChild(harga);
                item.appendChild(titleItemCheckout);
                item.appendChild(close);
        
                parent.appendChild(item);
        
                const hapus = document.getElementsByClassName('close');
        
                for(let i = 0; i < hapus.length; i++) {
                    hapus[i].addEventListener('click', function() {
                        hapus[i].parentElement.style.display = 'none';
                    })
                }
                
            }
        } else if(x == 1) {
            if (e.target.className == 'add-to-cart'){
                const parent = document.getElementById('checkout-item')
                const item = document.createElement("div");
                const titleItemCheckout = document.createElement("div");
                const titleItem = document.createElement("h4");
                const harga = document.createElement("h5");
                const close = document.createElement("span");
        
                item.classList.add('item');
                titleItemCheckout.classList.add('title-item-checkout');
                titleItem.innerHTML = "Dekorasi dinding";
                harga.classList.add('text-gray');
                harga.innerHTML = "Rp. 50.000 - Rp. 125.000";
                close.classList.add('close');
                close.innerHTML = "x";
        
                titleItemCheckout.appendChild(titleItem);
                titleItemCheckout.appendChild(harga);
                item.appendChild(titleItemCheckout);
                item.appendChild(close);
        
                parent.appendChild(item);
        
                const hapus = document.getElementsByClassName('close');
        
                for(let i = 0; i < hapus.length; i++) {
                    hapus[i].addEventListener('click', function() {
                        hapus[i].parentElement.style.display = 'none';
                    })
                }
                
            }
        }
    })
}

// hapus item checkout
