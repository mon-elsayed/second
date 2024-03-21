const dropArea = document.querySelector(".img-area"),
dragText = dropArea.querySelector("header")
const selectImage = document.querySelector('.select-image');
const inputFile = document.querySelector('#file');
// const imgArea = document.querySelector('.img-area');

//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", ()=>{
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload image";
});
//If user drop File on DropArea
dropArea.addEventListener("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = event.dataTransfer.files[0];
  showFile(); //calling function
});







////////////////////////////////////////////////////


selectImage.addEventListener('click', function () {
  inputFile.click();
 })

 inputFile.addEventListener("change", function(){
//getting user select file and [0] this means if user select multiple files then we'll select only the first one
file = this.files[0];
dropArea.classList.add("active");
showFile(); //calling function
});
///////////////////////////////////////////////////////////


function showFile(){
  let fileType = file.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file);
  }else{
    alert("This is not an Image File!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }
}


















// selectImage.addEventListener('click', function () {
//   inputFile.click();
// })

// inputFile.addEventListener('change', function () {
//   const image = this.files[0]
//   if(image.size < 2000000) {
//     const reader = new FileReader();
//     reader.onload = ()=> {
//       const allImg = dropArea.querySelectorAll('img');
//       allImg.forEach(item=> item.remove());
//       const imgUrl = reader.result;
//       const img = document.createElement('img');
//       img.src = imgUrl;
//       dropArea.appendChild(img);
//       dropArea.classList.add('active');
//       dropArea.dataset.img = image.name;
//     }
//     reader.readAsDataURL(image);
//   } else {
//     alert("Image size more than 2MB");
//   }
// })
























