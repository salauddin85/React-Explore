const getStoredList = () => {
  const storedList = localStorage.getItem('markReadList');
  return storedList ? JSON.parse(storedList) : [];
}
const addToMarkRead = (item) => {
    console.log(item);
  const storedList = getStoredList();
  const isItemInList = storedList.some(storedItem => storedItem.id === item);

  if (!isItemInList) {
    storedList.push(item);
    localStorage.setItem('markReadList', JSON.stringify(storedList));
  }
}
const removeFromMarkRead = (item) => {
  const storedList = getStoredList();
  const updatedList = storedList.filter(storedItem => storedItem.id !== item.id);
  localStorage.setItem('markReadList', JSON.stringify(updatedList));
}
const clearMarkReadList = () => {
  localStorage.removeItem('markReadList');
}
export default { addToMarkRead, removeFromMarkRead, clearMarkReadList };