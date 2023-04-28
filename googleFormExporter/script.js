"use strict";
{
  let questionObjs = [];
  let str = "";
  let type = (e) => {
    if (e.querySelector("[dir='auto'] [role='radio']")) return "Slider";
    if (e.querySelector("[role='radio']")) return "Multiple choice";
    if (e.querySelector("[role='checkbox']")) return "Choose all that apply";
    if (e.querySelector("[role='listbox']")) return "Dropdown";
    if (e.querySelector("input[type='text'")) return "Short answer";
    if (e.querySelector("textarea")) return "Paragraph";
    return "Unknown";
  };
  document.querySelectorAll(".Qr7Oae").forEach((e) => {
    const qType = type(e);
    const question = e.querySelector("[role=heading]").innerText.trim();
    let answers;
    if (qType === "Multiple choice" || qType === "Choose all that apply") {
      answers = Array.from(e.querySelectorAll(".aDTYNe.snByac.OIC90c")).map(
        (e) => e.innerText
      );
    } else if (qType === "Dropdown") {
      answers = Array.from(e.querySelectorAll("[jsname='wQNmvb']")).map(
        (e) => e.innerText
      );
    } else if (
      qType === "Short answer" ||
      qType === "Paragraph" ||
      qType === "Slider"
    ) {
      answers = "";
    } else {
      answers = "Unknown";
    }
    questionObjs.push({ question, answers, type: qType });
    // console.log(question, answers, qType);
  });
  for (let i = 0; i < questionObjs.length; i++) {
    str += `${i + 1}. ${questionObjs[i].question} (${questionObjs[i].type})\n${
      typeof questionObjs[i].answers === "object"
        ? questionObjs[i].answers.join("\n")
        : questionObjs[i].answers
    }\n`;
  }
}
