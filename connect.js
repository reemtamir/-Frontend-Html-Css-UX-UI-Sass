'use strict';

// document.querySelector('.check').addEventListener(
//   'click',
//   function (event) {
//     event.preventDefault();
//   },
//   false
// );

var elInput1 = document.querySelector('.input1');
var elInput2 = document.querySelector('.input2');
var elInput3 = document.querySelector('.input3');
var elInput4 = document.querySelector('.input4');
var inputs = [elInput1, elInput2, elInput3, elInput4];

function checkFiled(arr) {
  for (var i = 0; i < arr.length; i++)
    // console.log(arr[i].value);
    if (arr[i].value === '') {
      function submitForm(event) {
        event.preventDefault();
        window.history.back();
      }
    }

  return true;
}
{
  /* <form
onsubmit="submitForm(event)"
action="https://formspree.io/f/mrgjjgoj"
>
<input type="text" />
<button type="submit">Submit</button>
</form>
<script type="text/JavaScript">
function submitForm(event){
  event.preventDefault();
  window.history.back();
}
</script>  */
}
