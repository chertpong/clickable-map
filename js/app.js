$(
    function() {
        var sideLength = 10;
        var xSpaceLength = 10;
        var ySpaceLength = 10;
        var startY = 10;
        var mapWidth = 820;
        var mapheight = 520;

        var svgMap = d3.select("#map-container").append("svg")
            .attr("id","map")
            .attr("width",mapWidth)
            .attr("height",mapheight);

        for(var i = 1; i<= 25; i++){
            var startX = 10;
            for(var j = 1; j <= 40; j++){
                svgMap.append("path")
                    .attr("d",genBoxPoint(startX,startY,sideLength))
                    .attr("id",'boot-x'+j+'-y'+i)
                    .attr("class","boot")
                    .on({
                        click:function(){
                           $("#boot-info-modal").modal('show');
                            $("#boot-info-modal-title").text(this.id);
                        }
                    });
                startX+= xSpaceLength+sideLength;
            }
            startY+= ySpaceLength+sideLength;
        }

        $('#myModal').on('shown.bs.modal', function () {
            $('#myInput').focus()
        })
    }

);
//function showBootID(e){
//    console.log(this.id);
//}
function genBoxPoint(startX,startY,sideLength){
    var space = ' ';
    var comma = ',';
    var point1 = (startX+sideLength)+space+startY;
    var point2 = (startX+sideLength)+space+(startY+sideLength);
    var point3 = startX+space+(startY+sideLength);
    return 'M '+startX+space+startY+comma+'L '+point1+comma+point2+comma+point3+comma+startX+space+startY+' Z';
}

function svgEle(elem) {
    return $();
}