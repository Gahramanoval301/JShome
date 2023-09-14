//*  Here is a sample HTML file with a submit button.
//*  Write a JavaScript function to get the value of the href,
//*  hreflang, rel, target, and type attributes of the specified link.

const a = document.getElementById('w3r');
const attributes = a.attributes;

function getAttributes() {
    for (let at of attributes)
        if (at.name != 'id')
            console.log(`the value of ${at.name} is ${at.value}`)
}
//! at.name shows the name of the values!