export function saveLocal({board, turn}) {
    window.localStorage.setItem("board", JSON.stringify(board))
    window.localStorage.setItem("turn", turn)
}

export function removeLocal() {
    window.localStorage.removeItem("board")
    window.localStorage.removeItem("turn")
}