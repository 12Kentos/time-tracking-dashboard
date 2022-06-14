"use strict";

const buttons = document.querySelectorAll(".profile__btn");
const cards = document.querySelectorAll(".time-card__time");

const workHrsEl = document.querySelector(".work-hrs");
const playHrsEl = document.querySelector(".play-hrs");
const studyHrsEl = document.querySelector(".study-hrs");
const exerciseHrsEl = document.querySelector(".exercise-hrs");
const socialHrsEl = document.querySelector(".social-hrs");
const selfCareHrsEl = document.querySelector(".self-care-hrs");

const previousWorkHrsEl = document.querySelector(".work-previous-hrs");
const previousPlayHrsEl = document.querySelector(".play-previous-hrs");
const previousStudyHrsEl = document.querySelector(".study-previous-hrs");
const previousExerciseHrsEl = document.querySelector(".exercise-previous-hrs");
const previousSocialHrsEl = document.querySelector(".social-previous-hrs");
const previousSelfcareHrsEl = document.querySelector(".self-care-previous-hrs");

const url = "data.json";

function reqData(timeFrame = "weekly") {
  fetch(url)
    .then((res) => res.json())
    .then((data) => extractData(data, timeFrame));
}

reqData("weekly");

// Below code, gets the correct data according to what time frame it is

function extractData(data, timeFrame) {
  const workObject = data[0].timeframes;
  const playObject = data[1].timeframes;
  const studyObject = data[2].timeframes;
  const exerciseObject = data[3].timeframes;
  const socialObject = data[4].timeframes;
  const selfCareObject = data[5].timeframes;
  if (timeFrame === "daily") {
    workHrsEl.textContent = `${workObject.daily.current}hrs`;
    previousWorkHrsEl.textContent = `Yesterday - ${workObject.daily.previous}hrs`;

    playHrsEl.textContent = `${playObject.daily.current}hrs`;
    previousPlayHrsEl.textContent = `Yesterday - ${playObject.daily.previous}hrs`;

    studyHrsEl.textContent = `${studyObject.daily.current}hrs`;
    previousStudyHrsEl.textContent = `Yesterday - ${studyObject.daily.previous}hrs`;

    exerciseHrsEl.textContent = `${exerciseObject.daily.current}hrs`;
    previousExerciseHrsEl.textContent = `Yesterday - ${exerciseObject.daily.previous}hrs`;

    socialHrsEl.textContent = `${socialObject.daily.current}hrs`;
    previousSocialHrsEl.textContent = `Yesterday - ${socialObject.daily.previous}hrs`;

    selfCareHrsEl.textContent = `${selfCareObject.daily.current}hrs`;
    previousSelfcareHrsEl.textContent = `Yesterday - ${selfCareObject.daily.previous}hrs`;
  }

  if (timeFrame === "weekly") {
    workHrsEl.textContent = `${workObject.weekly.current}hrs`;
    previousWorkHrsEl.textContent = `Last Week - ${workObject.weekly.previous}hrs`;

    playHrsEl.textContent = `${playObject.weekly.current}hrs`;
    previousPlayHrsEl.textContent = `Last Week - ${playObject.weekly.previous}hrs`;

    studyHrsEl.textContent = `${studyObject.weekly.current}hrs`;
    previousStudyHrsEl.textContent = `Last Week - ${studyObject.weekly.previous}hrs`;

    exerciseHrsEl.textContent = `${exerciseObject.weekly.current}hrs`;
    previousExerciseHrsEl.textContent = `Last Week - ${exerciseObject.weekly.previous}hrs`;

    socialHrsEl.textContent = `${socialObject.weekly.current}hrs`;
    previousSocialHrsEl.textContent = `Last Week - ${socialObject.weekly.previous}hrs`;

    selfCareHrsEl.textContent = `${selfCareObject.weekly.current}hrs`;
    previousSelfcareHrsEl.textContent = `Last Week - ${selfCareObject.weekly.previous}hrs`;
  }

  if (timeFrame === "monthly") {
    workHrsEl.textContent = `${workObject.monthly.current}hrs`;
    previousWorkHrsEl.textContent = `Last Month - ${workObject.monthly.previous}hrs`;

    playHrsEl.textContent = `${playObject.monthly.current}hrs`;
    previousPlayHrsEl.textContent = `Last Month - ${playObject.monthly.previous}hrs`;

    studyHrsEl.textContent = `${studyObject.monthly.current}hrs`;
    previousStudyHrsEl.textContent = `Last Month - ${studyObject.monthly.previous}hrs`;

    exerciseHrsEl.textContent = `${exerciseObject.monthly.current}hrs`;
    previousExerciseHrsEl.textContent = `Last Month - ${exerciseObject.monthly.previous}hrs`;

    socialHrsEl.textContent = `${socialObject.monthly.current}hrs`;
    previousSocialHrsEl.textContent = `Last Month - ${socialObject.monthly.previous}hrs`;

    selfCareHrsEl.textContent = `${selfCareObject.monthly.current}hrs`;
    previousSelfcareHrsEl.textContent = `Last Month - ${selfCareObject.monthly.previous}hrs`;
  }
}

// Below code toggles on and off the white background for the day/week/month buttons and calles data according to what button is pushed

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    button.classList.toggle("active");
    if (button.classList.contains("daily")) {
      reqData("daily");
    }
    if (button.classList.contains("weekly")) {
      reqData("weekly");
    }
    if (button.classList.contains("monthly")) {
      reqData("monthly");
    }
  });
});
