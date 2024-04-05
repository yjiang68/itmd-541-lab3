
function checkInput() {
    var input = document.getElementById("billtotal").value;
    if (isNaN(input)) {
      alert("Input for Bill Total is not a number,please re-enter！");
    }else{
      document.getElementById("billtotal").value = parseFloat(input).toFixed(2);
    }
  }

  let billTotalInput = document.getElementById("billtotal");
  let rangeTipInput = document.getElementById("tip");


  rangeTipInput.addEventListener("input", function () {
    document.getElementById("tippercentage").value = rangeTipInput.value+'%';
    document.getElementById("tipamount").value = (rangeTipInput.value * billTotalInput.value/100).toFixed(2);
    document.getElementById("totalbillwithtip").value = (Number(billTotalInput.value) + (rangeTipInput.value * billTotalInput.value/100)).toFixed(2);
  });




