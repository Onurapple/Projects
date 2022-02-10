function validateForm() {
    let x = document.forms["myForm"]["email"].value;
    let y = document.forms["myForm"]['phone'].value;
    let z = document.forms["myForm"]['name'].value;
    let a = document.forms["myForm"]['address'].value;
    let b = document.forms["myForm"]['city'].value;
    let c = document.forms["myForm"]['country'].value;
    let d = document.forms["myForm"]['postcode'].value;
    // let x = document.forms["myForm"]["email",'phone','name','address','city','country','postcode'].value;
    if (x == "") {
      alert("Please fill the Email area.");
      return false;
    }else if (y == "") {
        alert("Please fill the Phone area.");
        return false;
      }else if (z == "") {
        alert("Please fill the Full Name area.");
        return false;
      }else if (a == "") {
        alert("Please fill the Address area.");
        return false;
      }else if (b == "") {
        alert("Please fill the City area.");
        return false;
      }else if (c == "") {
        alert("Please fill the Country area.");
        return false;
      }else if (d == "") {
        alert("Please fill the Post Code area.");
        return false;
      }else {
        alert("Form Başariyla Kaydedildi")
    }
  }

  // const validateEmail = (email) => {
  //   return email.match(
  //     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //   );
  // };
  
  // const validate = () => {
  //   const $result = $('#result');
  //   const email = $('#email').val();
  //   $result.text('');
  
  //   if (validateEmail(email)) {
  //     $result.text(email + ' is valid :)');
  //     $result.css('color', 'green');
  //   } else {
  //     $result.text(email + ' is not valid :(');
  //     $result.css('color', 'red');
  //   }
  //   return false;
  // }
  
  // $('#email').on('input', validate);

  let saat = new Date();
  console.log(saat);