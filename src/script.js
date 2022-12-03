function updateTime() {
  // auckland

  let aucklandElement = document.querySelector("#auckland");
  let aucklandDateElement = aucklandElement.querySelector(".date");
  let aucklandTimeElement = aucklandElement.querySelector(".time");
  let aucklandAmPmElement = aucklandElement.querySelector(".amPm");
  let aucklandTimeDifferenceElement =
    aucklandElement.querySelector(".timeDifference");
  let aucklandTime = moment().tz("Pacific/Auckland");

  aucklandDateElement.innerHTML = `${aucklandTime.format("dddd")},`;
  aucklandTimeElement.innerHTML = `${aucklandTime.format("h:mm")}`;
  aucklandAmPmElement.innerHTML = `${aucklandTime.format("A")}`;
  aucklandTimeDifferenceElement.innerHTML = `${aucklandTime.format("Z")}`;

  //mexico

  let mexicoElement = document.querySelector("#mexico-city");
  let mexicoDateElement = mexicoElement.querySelector(".date");
  let mexicoTimeElement = mexicoElement.querySelector(".time");
  let mexicoAmPmElement = mexicoElement.querySelector(".amPm");
  let mexicoTimeDifferenceElement =
    mexicoElement.querySelector(".timeDifference");
  let mexicoTime = moment().tz("America/Mexico_City");

  mexicoDateElement.innerHTML = `${mexicoTime.format("dddd")},`;
  mexicoTimeElement.innerHTML = `${mexicoTime.format("h:mm")}`;
  mexicoAmPmElement.innerHTML = `${mexicoTime.format("A")}`;
  mexicoTimeDifferenceElement.innerHTML = `${mexicoTime.format("Z")}`;

  // paris

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisAmPmElement = parisElement.querySelector(".amPm");
  let parisTimeDifferenceElement =
    parisElement.querySelector(".timeDifference");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = `${parisTime.format("dddd")},`;
  parisTimeElement.innerHTML = `${parisTime.format("h:mm")}`;
  parisAmPmElement.innerHTML = `${parisTime.format("A")}`;
  parisTimeDifferenceElement.innerHTML = `${parisTime.format("Z")}`;

  // tokyo

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoAmPmElement = tokyoElement.querySelector(".amPm");
  let tokyoTimeDifferenceElement =
    tokyoElement.querySelector(".timeDifference");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = `${tokyoTime.format("dddd")},`;
  tokyoTimeElement.innerHTML = `${tokyoTime.format("h:mm")}`;
  tokyoAmPmElement.innerHTML = `${tokyoTime.format("A")}`;
  tokyoTimeDifferenceElement.innerHTML = `${tokyoTime.format("Z")}`;
}

updateTime();
setInterval(updateTime, 1000);
