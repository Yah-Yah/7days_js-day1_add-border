function addBorder(array) {

  const initialArray = array;
  let finalArray = [];
  initialArray.unshift('');
  initialArray.push('');

  initialArray.forEach((element) => {
    element = element.split("");
    element.unshift("*");
    while (element.length<5) {
        element.push("*");
    };
    element = element.join("");
    finalArray.push(element);
    return finalArray;
  })
  finalArray.forEach((element) => {
    let eachParagraph = document.createElement('p');
    eachParagraph.innerHTML = element;
    document.body.appendChild(eachParagraph);
  })
}
