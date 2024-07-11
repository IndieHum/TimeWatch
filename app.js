const Minutes = document.getElementById("minutes");
const Seconds = document.getElementById("seconds");
const StopBtn = document.getElementById("stop");
const StartBtn = document.getElementById("start");
const ResetBtn = document.getElementById("reset");
const DocTitle = document.title;
let MinutesNum = 0;
let SecondsNum = 0;
let MainInterval;

function StartBtnHandler() {
    MainInterval = setInterval(() => {
        SecondsNum++;
        Seconds.innerText = SecondsNum >= 10 ? SecondsNum : `0${SecondsNum}`;
        switch (SecondsNum) {
            case 59:
                Seconds.innerText = "00";
                MinutesNum++;
                Minutes.innerText =
                    MinutesNum >= 10 ? MinutesNum : `0${MinutesNum}`;
                SecondsNum = 0;
                break;
        }
        switch (MinutesNum) {
            case 60:
                alert("you made that!");
                return;
        }
    }, 1000);
    StartBtn.style.cursor = "not-allowed";
    StartBtn.disabled = true;
}

function StopBtnHandler() {
    StartBtn.disabled = false;
    StartBtn.style.cursor = "default";
    clearInterval(MainInterval);
}

function ResetBtnHandler() {
    clearInterval(MainInterval);
    StartBtn.disabled = false;
    StartBtn.style.cursor = "default";
    Minutes.innerText = "00";
    Seconds.innerText = "00";
    MinutesNum = 0;
    SecondsNum = 0;
}

window.addEventListener("blur", () => {
    if (StartBtn.disabled) {
        document.title = "Time Goes On...";
    } else document.title = DocTitle;
});
window.addEventListener("focus", () => {
    document.title = DocTitle;
});

StartBtn.addEventListener("click", StartBtnHandler);
StopBtn.addEventListener("click", StopBtnHandler);
ResetBtn.addEventListener("click", ResetBtnHandler);
