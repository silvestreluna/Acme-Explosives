
const printToDom = (divId, itemToPrint) => {
  const ItemId = document.getElementById(divId);
  ItemId.innerHTML = itemToPrint;
};

export default { printToDom };
