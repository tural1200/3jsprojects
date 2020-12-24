(function() {
    // "btn" id-li a tag-ni seç //
    const button = document.querySelector('#btn')
    // "body" tag-ni seç //
    const body = document.querySelector('body')
    // hex dəyərlərini array-də daxil et //
    const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    // "hex-value" id-li span tagini seç //
    const value = document.querySelector('#hex-value')

    // a tag-nə click-lədikdə rəngi dəyiş //
    button.addEventListener('click', changeHex)

    function changeHex(){
        let hex = '#'

        // hex dəyərlərinin random rəyiməsi üçün for döngüsü //
        for (let i = 0; i < 6; i++){
            const index = Math.floor(Math.random()*hexValues.length)
            hex += hexValues[index]
        }
        // "hex-value" id-li span tag-i daxilində dövrdən alınan hex dəyərini yaz //
        value.textContent = hex
        // Background Color-a rəngi dəyişmək üçün dövrdən alınan hex dəyərini ver //
        body.style.backgroundColor = hex
    }
} )()