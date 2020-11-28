window.onload = function () {
  var date = new Date();
  var CurrentDate = document.querySelector("#infoBox #infoContent");
  CurrentDate.innerHTML =
    date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
};
