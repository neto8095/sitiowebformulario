const form = document.getElementById('form-contacto');

form.validationCustom04.addEventListener('change',(value) => {
  let validationCustom04 = form.validationCustom04.value;
  let precioSeguro = document.getElementById('precioSeguro');
  switch(validationCustom04){
    case 'basico':
      precioSeguro.innerHTML = `Precio del seguro ${validationCustom04} $500`;
      return;
    case 'intermedio':
      precioSeguro.innerHTML = `Precio del seguro ${validationCustom04} $1000`;
      return;
    case 'Premium':
      precioSeguro.innerHTML = `Precio del seguro ${validationCustom04} $1500`;
      return;

  }
})




