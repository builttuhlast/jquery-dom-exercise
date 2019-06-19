// Your jQuery Logic will go here

$(document).ready(function() {

    $('form').on('submit', function(event) {
        // Prevent the default behavior of a form submit
        event.preventDefault()

        // Prevent an empty todo item from being added
        if($('#todo').val() === '') {
            return
        }

        // Create a new empty li element
        let listItem = $('<li></li>')
        // Retrieve the value in the input for a new todo
        let toDoText = $('#toDoText').val()
        // Create a button for the delete functionality
        let delBtn = $('<button class="del-btn">&times;</button>')
        // Create a button for the completed functionality
        let completeBtn = $('<button class="complete-btn">&#10003;</button>')

        // Set the text of the new todo li element to the
        // value retrieved from the form input
        listItem.text(toDoText)
        // Append (insert) the completed checkmark button within the new todo li element
        listItem.append(completeBtn)
        // Append (insert) the delete button within the new todo li element
        listItem.append(delBtn)

        // Append the new li element to the todo list
        $('#list').append(listItem)

        // Reset the value of the form input to an empty string
        $('#todo').val('')
    })
