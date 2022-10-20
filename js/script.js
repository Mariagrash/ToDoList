$(document).ready(function(){
    $("#Add").click(function(){
        var addItem = $("input[name = listItem]").val();
        $("ol").append("<li>"+addItem+"&nbsp;&nbsp;<button type=button, class=btn btn-danger, id=Delete>Delete</button>"+"</li>");
    });

    $(document).on("click","#Delete",function(){
        $(this).parent("li").wrap("<strike>");
        $(this).parent("li").fadeOut("slow");
    });
    $("ol").sortable();
});