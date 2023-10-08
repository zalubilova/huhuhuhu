OLED.init(128, 64)
OLED.writeStringNewLine("cisla delitelna sedmi: ")
OLED.newLine()
for (let pořadí = 0; pořadí <= 50; pořadí++) {
    if (pořadí % 7 == 0) {
        OLED.writeNum(pořadí)
        OLED.writeString("; ")
    }
}
basic.forever(function () {
	
})
