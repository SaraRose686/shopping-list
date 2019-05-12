$(function() {
    // Handle event when Submit button is clicked
    $("#js-shopping-list-form").submit( function(e) {
        e.preventDefault(); // prevent any default page submissions
        const entry = $(this).find("#shopping-list-entry");
        
        // Add entry to list
        $("ul.shopping-list").append(`<li>
            <span class="shopping-item">${entry.val()}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
            </div></li>`);

        // Clear input text after entry has been added to list
        entry.val("");
    });

    // Handle events when Check button is clicked
    $("ul.shopping-list").on("click", "button.shopping-item-toggle", function(e) {
        $(this).parent().siblings().toggleClass("shopping-item__checked");
    });

    // Handle events when Delete button is clicked
    $("ul.shopping-list").on("click", "button.shopping-item-delete", function(e) {
        $(this).parents("li").remove();
    });
});