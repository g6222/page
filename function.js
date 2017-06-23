$(document).ready(function() {
        $.getJSON("page.json", function (result) {
            console.log(result.content[1].text_content)
            $('#1').text(result.fram[0].block1);
            $('#phone').text(result.fram[1].block2);
            for(var i = 0;i<result.frame[1].navigationbar.length;i++){
                var j= i+1;
                $('#link'+j).text(result.frame[1].navigationbar[i])
            }
            $('#OUR').text(result.heading[0].title)
            for(var k=0;k<result.image_text.length;k++){
                var j= k+1
                $('#image_text'+j).text(result.image_text[k])
            }
            $("#page_text").text(result.page_text)
            $('#titale2').text(result.titale)
            for(var i=0;i<result.content[0].content_t.length;i++){
                var j= i+1
                $('#content_t'+j).text(result.content[0].content_t[i])
            }
            for(var i=0;i<4;i++){
                var j=i+1
                $("#text"+j).text(result.content[1].text_content)
            }
            for(var i=0;i<result.head.length;i++){
                var j= i+1
                $('#head'+j).text(result.head[i])
            }
        })
})