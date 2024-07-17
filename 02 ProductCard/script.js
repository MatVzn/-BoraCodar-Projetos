function changeMode() {
  const changeModeButton = document.querySelector('#changeModeButton')
  const productImage = document.querySelector('.product-img')

  {(changeModeButton.src.includes('close')) 
    ? (
      changeModeButton.src = './assets/360.svg',
      productImage.src = './assets/product.png'
      ) 
    : (
      changeModeButton.src = './assets/close.svg',
      productImage.src = './assets/product.gif'
      )
  }

}





// checkBox.src = './assets/check.svg'
