//Retrieve attribute elements
const currentAttribute = document.getElementById('currentAttribute');
const desiredAttribute = document.getElementById('desiredAttribute');
const xpCostAttribute = document.getElementById('xpCostAttribute');
const attributeXPButton = document.getElementById('calculateXPAttribute');

//Retrieve skill elements
const skillRank = document.getElementById('skillRank');
const die = document.getElementById('die');
const xpCostSkill = document.getElementById('xpCostSkill');
const skillXPButton = document.getElementById('calculateXPSkill');

function calculateAttributeXP() {
    //Declare variables
    let attribute = parseInt(currentAttribute.value);
    let goal = parseInt(desiredAttribute.value);
    let rank = calculateAttributeRank(attribute);
    let result = 0;

    //Calculate XP cost
    for(attribute; attribute < goal; attribute++) {
        rank = calculateAttributeRank(attribute);
        result += 2 * rank;
        console.log("This is being executed");
    }

    //Assign values
    xpCostAttribute.value = result;
}

function calculateAttributeRank(attribute) {
    let rank = attribute - attribute % 10;
    rank /= 10;
    if (rank <= 0) {
        rank = 1;
    }
    return rank;
}

function calculateSkillXP() {
    //Assign variables
    let rank = parseInt(skillRank.value);
    let dieXP = parseInt(die.value);

    //Correct potential errors in rank
    if(rank <= 0) {
        rank = 0;
    }
    else if(rank > 4) {
        rank = 4;
    }

    //Calculate XP accounting for the increase in rank
    rank++;
    let result = rank * dieXP;

    //Assign result
    xpCostSkill.value = result;
}

//Add button listeners
attributeXPButton.addEventListener('click', function () {calculateAttributeXP()});
skillXPButton.addEventListener('click', function () {calculateSkillXP()});