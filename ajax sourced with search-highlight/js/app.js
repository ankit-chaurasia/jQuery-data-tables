$(document).ready(function () {
    // Configuration to highlight searched text
    var table = $('#example').DataTable({
        "ajax": "data/objects.txt",
        "columns": [
            { "data": "name" },
            { "data": "position" },
            { "data": "office" },
            { "data": "extn" },
            { "data": "start_date" },
            { "data": "salary" }
        ],
        /*
        * For enabling search highlight
        */
        searchHighlight: true
    });

    table.on('draw', function () {
        var body = $(table.table().body());
        body.unhighlight();
        body.highlight(table.search());
    });

});