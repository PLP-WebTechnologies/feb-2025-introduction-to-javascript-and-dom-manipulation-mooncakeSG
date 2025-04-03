// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Select elements that you want to interact with
    const changeTextBtn = document.getElementById('changeTextBtn');
    const toggleStyleBtn = document.getElementById('toggleStyleBtn');
    const addElementBtn = document.getElementById('addElementBtn');
    const removeElementBtn = document.getElementById('removeElementBtn');
    const changeBgBtn = document.getElementById('changeBgBtn');
    
    const dynamicText = document.getElementById('dynamicText');
    const contentBox = document.getElementById('contentBox');
    const elementsContainer = document.getElementById('elementsContainer');
    
    // Track element count to give each new element a unique ID
    let elementCount = 0;
    
    // Array of text options to cycle through
    const textOptions = [
        "This text was changed using JavaScript!",
        "JavaScript makes web pages interactive.",
        "DOM manipulation is a powerful feature of JavaScript.",
        "You can dynamically update content on your webpage.",
        "Click again to see another message!"
    ];
    
    // Track which text option we're currently showing
    let currentTextIndex = 0;
    
    // Function to change text content
    changeTextBtn.addEventListener('click', function() {
        // Update the text content
        dynamicText.textContent = textOptions[currentTextIndex];
        
        // Add a highlight class temporarily
        dynamicText.classList.add('highlight');
        
        // Remove the highlight class after 1 second
        setTimeout(function() {
            dynamicText.classList.remove('highlight');
        }, 1000);
        
        // Move to the next text option, looping back to the beginning if necessary
        currentTextIndex = (currentTextIndex + 1) % textOptions.length;
    });
    
    // Function to toggle styles
    toggleStyleBtn.addEventListener('click', function() {
        // Toggle a class on the content box
        contentBox.classList.toggle('highlight');
        
        // Change other styles directly
        if (contentBox.style.borderWidth === '3px') {
            contentBox.style.borderWidth = '1px';
            contentBox.style.borderColor = '#ddd';
            contentBox.style.borderStyle = 'solid';
        } else {
            contentBox.style.borderWidth = '3px';
            contentBox.style.borderColor = '#4285f4';
            contentBox.style.borderStyle = 'dashed';
        }
    });
    
    // Function to add a new element
    addElementBtn.addEventListener('click', function() {
        // Create a new element
        const newElement = document.createElement('div');
        elementCount++;
        
        // Set its attributes and content
        newElement.id = 'element-' + elementCount;
        newElement.className = 'content-box';
        newElement.style.marginBottom = '10px';
        newElement.innerHTML = `
            <h3>Element ${elementCount}</h3>
            <p>This element was dynamically created with JavaScript.</p>
        `;
        
        // Add it to the container
        elementsContainer.appendChild(newElement);
        
        // Enable the remove button if it was disabled
        if (elementsContainer.children.length > 0) {
            removeElementBtn.disabled = false;
        }
    });
    
    // Function to remove the last added element
    removeElementBtn.addEventListener('click', function() {
        // Check if there are any elements to remove
        if (elementsContainer.children.length > 0) {
            // Remove the last child element
            elementsContainer.removeChild(elementsContainer.lastChild);
            
            // Disable the remove button if there are no more elements
            if (elementsContainer.children.length === 0) {
                removeElementBtn.disabled = true;
            }
        }
    });
    
    // Function to change the background color
    changeBgBtn.addEventListener('click', function() {
        // Generate a random light color
        const randomColor = getRandomLightColor();
        document.body.style.backgroundColor = randomColor;
    });
    
    // Helper function to generate a random light color
    function getRandomLightColor() {
        // Generate RGB values between 200 and 255 for a light color
        const r = Math.floor(Math.random() * 56) + 200;
        const g = Math.floor(Math.random() * 56) + 200;
        const b = Math.floor(Math.random() * 56) + 200;
        
        return `rgb(${r}, ${g}, ${b})`;
    }
    
    // Initialize - disable remove button if there are no elements
    if (elementsContainer.children.length === 0) {
        removeElementBtn.disabled = true;
    }
});