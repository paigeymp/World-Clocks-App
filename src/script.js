function updateTime() {
  // auckland

  let aucklandElement = document.querySelector("#auckland");
  if (aucklandElement) {
    let aucklandDateElement = aucklandElement.querySelector(".date");
    let aucklandTimeElement = aucklandElement.querySelector(".time");
    let aucklandTimeDifferenceElement =
      aucklandElement.querySelector(".timeDifference");
    let aucklandTime = moment().tz("Pacific/Auckland");

    aucklandDateElement.innerHTML = `${aucklandTime.format("dddd")},`;
    aucklandTimeElement.innerHTML = `${aucklandTime.format(
      "h:mm [<small>]A[</small>]"
    )}`;
    aucklandTimeDifferenceElement.innerHTML = `${aucklandTime.format("Z")}`;
  }
  //mexico

  let mexicoElement = document.querySelector("#mexico-city");
  if (mexicoElement) {
    let mexicoDateElement = mexicoElement.querySelector(".date");
    let mexicoTimeElement = mexicoElement.querySelector(".time");
    let mexicoTimeDifferenceElement =
      mexicoElement.querySelector(".timeDifference");
    let mexicoTime = moment().tz("America/Mexico_City");

    mexicoDateElement.innerHTML = `${mexicoTime.format("dddd")},`;
    mexicoTimeElement.innerHTML = `${mexicoTime.format(
      "h:mm [<small>]A[</small>]"
    )}`;
    mexicoTimeDifferenceElement.innerHTML = `${mexicoTime.format("Z")}`;
  }
  // paris

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTimeDifferenceElement =
      parisElement.querySelector(".timeDifference");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = `${parisTime.format("dddd")},`;
    parisTimeElement.innerHTML = `${parisTime.format(
      "h:mm [<small>]A[</small>]"
    )}`;
    parisTimeDifferenceElement.innerHTML = `${parisTime.format("Z")}`;
  }
  // tokyo

  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTimeDifferenceElement =
      tokyoElement.querySelector(".timeDifference");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = `${tokyoTime.format("dddd")},`;
    tokyoTimeElement.innerHTML = `${tokyoTime.format(
      "h:mm  [<small>]A[</small>]"
    )}`;
    tokyoTimeDifferenceElement.innerHTML = `${tokyoTime.format("Z")}`;
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `   <div class="cityTimezone">
        <div class="row">
          <div class="col">
            <span class="date">${cityTime.format("dddd")}</span>
            <span class="timeDifference">${cityTime.format("Z")}</span>
          </div>
        </div>
        <div class="row">
          <div class="col cityDisplay">
            <span>${cityName}</span>
            <br>
            <span>${cityTime.format("h:mm [<small>]A[</small>]")}</span>
          </div>
        </div>
        </div>
        <a href="/"><i class="fa-solid fa-rotate-right refresh"></i></a>`;
}

updateTime();
setInterval(updateTime, 1000);
let citiesSelectElement = document.querySelector("#city-selector");
citiesSelectElement.addEventListener("change", updateCity);
