
function OnSolve() {
    const tokenelement = document.getElementById('FunCaptcha-Token')
    const token = tokenelement.value
    tokenelement.hidden=false
    document.getElementById("text").innerHTML=btoa(token)
    document.getElementById("answer").hidden=false
}

function loadChallenge() {
    document.getElementById("button").hidden=true
    document.getElementById("button2").hidden=false
    document.getElementById("answer").hidden=true
    new FunCaptcha({
        public_key: "A4E24C1X-1AJ4-C791-6BBE-QF33CE7A0H6F",
        target_html: "CAPTCHA",
        callback: OnSolve
    });
}
