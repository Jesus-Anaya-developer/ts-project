(()=>{

  let productTitle: string = 'My amazing product';
  productTitle = 'My amazing product changed';
  console.log('Product Title', productTitle);

  const summary = `
    Title: ${productTitle}
    description: descripcion
    blablabla
  `;
  console.log('summary:', summary);

})();
