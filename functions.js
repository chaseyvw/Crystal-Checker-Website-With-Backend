var amethyst = "Amethyst is a protective stone that is excellent at purifying and clearing negative thoughts.";
var aventurine = "Adventurine is comforting and encourages compassion and tolerance for others.";
var carnelian = "Carnelian heightens creative energy, injecting vitality into routine tasks.";
var dalmationJasper = "Dalmation Jasper supports you in playing more and working less. Carry it in your pocket to lighten up your mood!";
var labradorite = "Labradorite is known as the stone of transformation. It motivates you to spring into action";
var orangeCalcite = "Orange Calcite increases the confidence needed to forge new paths into the deeper meanings of life.";
var rainbowMoonstone = "Rainbow Moonstone strengthens intuition and opens psychic pathways.";
var roseQuartz = "Rose Quartz is a stone of pure unconditional love, opening the heart chakra to attract divine tenderness and infinite love.";
var selenite = "Selenite helps to clear negative energy. Charge and cleanse other crystals by placing them on a small piece of Selenite for a few hours.";

//Home page function for crystal abilities
function showResults() {
    var crystalName = document.getElementById("crystalName").value;
    var crystalName = crystalName.toLowerCase();

    if (crystalName == 'amethyst'){
        document.getElementById("results").innerText = amethyst;
    }
    else if (crystalName == 'aventurine'){
        document.getElementById("results").innerText = aventurine;
    }
    else if (crystalName == 'carnelian'){
        document.getElementById("results").innerText = carnelian;
    }
    else if (crystalName == 'dalmation jasper'){
        document.getElementById("results").innerText = dalmationJasper;
    }
    else if (crystalName == 'labradorite'){
        document.getElementById("results").innerText = labradorite;
    }
    else if (crystalName == 'orange calcite'){
        document.getElementById("results").innerText = orangeCalcite;
    }
    else if (crystalName == 'rainbow moonstone'){
        document.getElementById("results").innerText = rainbowMoonstone;
    }
    else if (crystalName == 'rose quartz'){
        document.getElementById("results").innerText = roseQuartz;
    }
    else if (crystalName == 'selenite'){
        document.getElementById("results").innerText = selenite;
    }
    else{
        document.getElementById("results").innerText = "Sorry it looks like we don't have that crystal on file or you spelled it wrong. Please try again.";
    }
    
} 

//Contact Form Submission Function -- FAKE SUBMISSION
function contactMessageSent() {
    document.getElementById("contactFirstName").innerText = "";
    document.getElementById("contactLastName").innerText = "";
    document.getElementById("contactEmail").innerText = "";
    document.getElementById("contactMessage").innerText = "";
    alert("Message was successfully sent!");
}

//Header Links Functions
function homeButton() {
    
}

function contactButton() {

}

function aboutButton() {

}