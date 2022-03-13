const box_header = ".box-header";
const arrow = "#arrow";
const question = "#question";
const answer = "#answer";

const bold = "var(--fw-bold)";
const regular = "var(--fw-regular)";
const arrow_up = "rotate(180deg)";
const arrow_down = "rotate(0deg)";

$(document).ready(function() {
    console.log("js ready");

    $(box_header).on('click', function() {
        if ($(this).parent().find(answer).css("display") === "none") {
            $(this).find(arrow).css("transform", arrow_up);
            $(this).find(question).addClass("bold");
            $(this).parent().find(answer).css("display", "inline");
        } else {
            $(this).find(arrow).css("transform", arrow_down);
            $(this).find(question).removeClass("bold");
            $(this).parent().find(answer).css("display", "none");
        };
    });
});