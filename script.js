 // Section 1: TODOs
 // TODO: Register submissions from the user on the form.
 // TODO: Determine the value of the data submitted and add it to a JavaScript array calle
 // TODO: Call the render function to update the table with the new tasks

  // Section 2: App State Variables
  let tasks = [] // Creates empty array to store tasks
  const taskForm = document.getElementById("taskForm") // Gets reference to the form element
  const taskTable = document.getElementById("taskTable") // Gets reference to the table element
  
  // Test if elements are being selected correctly
  console.log("taskForm:", taskForm) // Logs form element to console for debugging
  console.log("taskTable:", taskTable) // Logs table element to console for debugging

   // Function to handle form submissions
 function handleSubmission(event) { // Defines function to handle form submissions
    event.preventDefault(); // Prevents page from refreshing when form is submitted
    // TODO: Get form input values
    const taskName = document.getElementById('taskName').value; // Gets task name from input field
    const taskDescription = document.getElementById('taskDescription').value; // Gets task description from textarea
    const taskDeadline = document.getElementById('taskDeadline').value; // Gets task deadline from date input
    // TODO: Validate input fields
    if (!taskName|| !taskDeadline) { // Checks if task name and deadline are filled
           alert('Task name and deadline are required!'); // Shows alert if required fields are empty
           return; // Stops function if validation fails
       }
       // TODO: Update the tasks array
    tasks.push({ name: taskName, description: taskDescription, deadline: taskDeadline }); // Adds new task object to tasks array
       // TODO: Call the render function
       render(); // Calls render function to update display
    }
    // Function to render tasks in the table
    function render() { // Defines function to display tasks without using template strings
       taskTable.innerHTML = ''; // Clear the table content
       tasks.forEach(task => {
           const row = document.createElement('tr');

           const nameCell = document.createElement('td');
           nameCell.textContent = `${task.name}:`;
           row.appendChild(nameCell);

           const descCell = document.createElement('td');
           descCell.textContent = task.description;
           row.appendChild(descCell);

           const deadlineCell = document.createElement('td');
           deadlineCell.textContent = task.deadline;
           row.appendChild(deadlineCell);

           const completeCell = document.createElement('td');
           const completeBtn = document.createElement('button');
           completeBtn.textContent = 'Complete';
           completeBtn.setAttribute('onclick', 'markTaskComplete(this)');
           completeCell.appendChild(completeBtn);
           row.appendChild(completeCell);

           const removeCell = document.createElement('td');
           const removeBtn = document.createElement('button');
           removeBtn.textContent = 'Remove';
           removeBtn.setAttribute('onclick', 'removeTask(this)');
           removeCell.appendChild(removeBtn);
           row.appendChild(removeCell);

           taskTable.appendChild(row);
       });
    }
    // Function to mark a task as complete
    function markTaskComplete(button) { // Defines function to mark task complete
        const row = button.closest('tr'); // Finds the table row containing the button
        const rowIndex = Array.from(taskTable.rows).indexOf(row); // Gets the index of that row
        
        if (rowIndex !== -1) { // Checks if row was found
            // Add strikethrough styling to indicate completion
            row.style.textDecoration = 'line-through'; // Adds strikethrough to text
            row.style.opacity = '0.6'; // Makes row semi-transparent
            
            // Change button text and disable it
            button.textContent = 'Completed'; // Changes button text to "Completed"
            button.disabled = true; // Disables the button
            button.style.backgroundColor = '#28a745'; // Changes button color to green
        }
    }

    // Function to remove a task
    function removeTask(button) { // Defines function to remove task
        const row = button.closest('tr'); // Finds the table row containing the button
        const rowIndex = Array.from(taskTable.rows).indexOf(row); // Gets the index of that row
        
        if (rowIndex !== -1) { // Checks if row was found
            // Remove the task from the tasks array
            tasks.splice(rowIndex, 1); // Removes task from tasks array
            
            // Re-render the table to update the display
            render(); // Calls render to update display
        }
    }

    // Function to initialize the table
    function init() { // Defines initialization function
       taskTable.innerHTML = ''; // Clear the table
       tasks = []; // Reset the tasks array
       render(); // Call the render function
    }
    // Event listener for form submission
    taskForm.addEventListener('submit', handleSubmission); // Adds event listener for form submission
    // Call the init function to set up the initial state of the app
    init(); // Calls init function to start the app