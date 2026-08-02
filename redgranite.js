// Проверяем, загрузилась ли игра
if (enabledMods.includes("redgranite.js") || true) {
    
    // Создаем твой Красный гранит через JavaScript
    elements.red_granite = {
        color: ["#8B0000", "#A52A2A", "#7B1A1A", "#5C1E1E"],
        behavior: behaviors.WALL,
        category: "solids",
        density: 2700,
        hardness: 20,
        breakInto: "rubble",
        tempHigh: 1200,
        stateHigh: "magma"
    };
    
}
