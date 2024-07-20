const modesObject = {
    bullseyeMode: ["🎯"],
    foodMode: [
        '🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', 
        '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🍆', '🥑', 
        '🥦', '🥬', '🥒', '🌶️', '🌽', '🥕', '🧄', '🧅', '🥔', 
        '🍠', '🥐', '🥯', '🍞', '🥖', '🥨', '🧀', '🥚', '🍳', '🥓', 
        '🥩', '🍗', '🍖', '🦴', '🌭', '🍔', '🍟', '🍕', '🥪', 
        '🥙', '🧆', '🌮', '🌯', '🥗', '🥘', '🍝', '🍜', 
        '🍲', '🍛', '🍣', '🍱', '🥟', '🍤', '🍙', '🍚', '🍘', '🍥', 
        '🥠', '🥮', '🍢', '🍡', '🍧', '🍨', '🍦', '🥧', '🧁', '🍰', 
        '🎂', '🍮', '🍭', '🍬', '🍫', '🍿', '🍩', '🍪', '🌰'
    ],
    flagsMode: [    
        "🇦🇷", "🇦🇺", "🇧🇷", "🇨🇦", "🇨🇳", "🇨🇴", "🇩🇪", "🇪🇸", "🇫🇷", "🇬🇧",
        "🇮🇳", "🇮🇹", "🇯🇵", "🇰🇷", "🇲🇽", "🇳🇱", "🇵🇪", "🇵🇹", "🇷🇺", "🇺🇸",
        "🇿🇦", "🇸🇪", "🇨🇭", "🇳🇴", "🇩🇰", "🇫🇮", "🇬🇷", "🇹🇷", "🇪🇬", "🇸🇦",
        "🇦🇪", "🇮🇱", "🇮🇷", "🇵🇰", "🇹🇭", "🇻🇳", "🇵🇭", "🇮🇩", "🇲🇾", "🇸🇬",
        "🇳🇿", "🇨🇱", "🇦🇹", "🇧🇪", "🇮🇪", "🇵🇱", "🇭🇺", "🇨🇿", "🇷🇴", "🇺🇦"
    ],
    pawMode: [
        "🐶", "🐱", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮", "🐷", 
        "🐸", "🐵", "🐔", "🐧", "🐦", "🐤", "🐣", "🐺", "🐗", "🐴", 
        "🦄", "🐝", "🐛", "🦋", "🐌", "🐞", "🐜", "🦗", "🕷️", "🦂", 
        "🐢", "🐍", "🦎", "🐙", "🦑", "🦐", "🦞", "🦀", "🐠", "🐟", 
        "🐡", "🐬", "🐳", "🐋", "🦈", "🐊"
    ]
}
export const selectModeById = (id) => {
    return modesObject[id]
}
export const stylesBackground = { 
    backgroundColor: "hsla(120, 0%, 11%, 1)",
    backgroundImage: "radial-gradient(circle at 0% 3%, hsla(236.8, 74%, 60%, 0) 0%, transparent 12.971594992891745%), radial-gradient(circle at 100% 0%, hsla(38.35294117647059, 100%, 50%, 0.78) 0%, transparent 8.32978556442687%), radial-gradient(circle at 0% 50%, hsla(355, 100%, 93%, 0) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsla(340, 100%, 76%, 0) 0%, transparent 50%), radial-gradient(circle at 0% 100%, hsla(22, 100%, 77%, 0) 0%, transparent 50%), radial-gradient(circle at 11% 86%, hsla(236, 74%, 60%, 1) 0%, transparent 36.867578628059334%), radial-gradient(circle at 0% 0%, hsla(343, 100%, 76%, 0) 0%, transparent 50%)",
    backgroundBlendMode: "normal, normal, normal, normal, normal, normal, normal",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}

export const Styles = (positionFruit, startGame) => ({
    left: `${positionFruit.x}px`,
    top: `${positionFruit.y}px`,
    display: startGame ? "block" : "none",
    opacity: startGame ? 1 : 0,
});

export const mouseFollowerStyles = (positionMouse, setStyleMouse) => ({
    transform: `translate(${positionMouse.x}px, ${positionMouse.y}px)`,
    display: `${setStyleMouse}`
});