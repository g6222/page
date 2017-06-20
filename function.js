$(document).ready(function() {
    function fill_data() {
        console.log(1)
        $.getJSON("page.json", function (result) {
            $('#phone').text(result.fram.block1);
            $('#1').text(result.fram.block2);
            $('#tit_tex').text(result.title.logo);
        })
    }
})