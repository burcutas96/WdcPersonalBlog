//Sayfaki .btn-close-canvas classlarına sahip elemanları bulacak.
//Daha sonra bu elemanlara tek tek click event'i eklenecek.
//Yani .btn-close-canvas class'ına sahip olan elemanlara tıklandığında bir fonksiyon gerçekleştirilecek.
//İlgili elemanlara tıklandığında dokümantasyondaki [data-bs-dismiss="offcanvas"] attribute'una tıklanacak.
//Böylelikle offcanvas'ı kapatmış olacağız.

var BtnCanvas = document.querySelectorAll(".btn-close-canvas");
for (let i = 0; i < BtnCanvas.length; i++) {
    BtnCanvas[i].addEventListener("click", function(){
        document.querySelector('[data-bs-dismiss="offcanvas"]').click();
    });
}