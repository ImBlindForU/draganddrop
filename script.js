const sortableList = document.querySelector(".sortable-list");
const items = document.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener("dragstart" ,() => {
       setTimeout(() => item.classList.add("dragging"),0); 
    })
    item.addEventListener("dragend" ,() => {
        item.classList.remove("dragging");
    })
});

const initSortableList = (e) => {
    e.preventDefault()
    const draggingItem = sortableList.querySelector(".dragging");

    const sibilings = [...sortableList.querySelectorAll(".item:not(.dragging")];

    let nextSibiling =sibilings.find(sibiling => {
        return e.clientY <= sibiling.offsetTop + sibiling.offsetHeight / 2;
    })

    sortableList.insertBefore(draggingItem, nextSibiling);
}

sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", e => e.preventDefault());
